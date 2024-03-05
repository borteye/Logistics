import React, { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/about.jpg";
import { sendMessageToSupportChat } from "../utils";
import db from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";

type MessageInfo = {
  sender: string;
  createdAt: firebase.firestore.Timestamp | null;
  id: string | null;
  message: string;
};

const Chat = () => {
  const messagesEndRef = useRef(null);
  const [text, setText] = useState<string>("");

  const handleSendMessage: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    sendMessageToSupportChat(text);
    setText("");
  };

  const conversationRef = db
    .collection("conversation")
    .doc("zZVdgLWhnRSsvfyoXmmx")
    .collection("messages")
    .orderBy("createdAt");

  const [conversationSnapshot] = useCollection(conversationRef);

  const conversation = useMemo(() => {
    return (
      conversationSnapshot?.docs?.map((doc) => doc?.data() as MessageInfo) || []
    );
  }, [conversationSnapshot]);

  useEffect(() => {
    if (messagesEndRef?.current) {
      (messagesEndRef?.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [conversation]);

  return (
    <div className="fixed bottom-20 mb-8 right-4 average:right-12 h-[70vh] w-[90vw] max-w-[20rem] rounded-2xl z-50 bg-light shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <nav className="bg-primary rounded-t-2xl text-light flex items-center gap-4 rounded-b-none p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <p>Support chat</p>
      </nav>
      <div className=" h-[calc(70vh-112px)] px-5 py-1 overflow-y-scroll flex flex-col gap-8 no-scrollbar">
        {conversation?.map((messages) => {
          const formattedTime: string | undefined =
            messages?.createdAt && messages?.createdAt
              ? new Date(messages.createdAt.toMillis()).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : undefined;
          return (
            <>
              <div
                className={`${
                  messages?.sender === "You" ? "flex-row-reverse" : "flex"
                } gap-x-3`}
              >
                <div>
                  <p
                    className={`font-semibold  ${
                      messages?.sender === "You"
                        ? "flex gap-x-2 flex-row-reverse"
                        : "flex gap-x-2"
                    }`}
                  >
                    <p>{messages?.sender}</p>

                    <span className="font-normal">
                      {" "}
                      {formattedTime && formattedTime}
                    </span>
                  </p>
                  <div
                    className={` flex ${
                      messages?.sender === "You" && " flex-row-reverse"
                    }`}
                  >
                    <p
                      className={`bg-primary text-light py-2 px-4 ${
                        messages?.sender === "You"
                          ? "rounded-none rounded-tl-2xl rounded-br-2xl rounded-bl-2xl "
                          : "rounded-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl "
                      }`}
                    >
                      {messages?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div ref={messagesEndRef} />
            </>
          );
        })}
      </div>
      <form onSubmit={handleSendMessage} className="px-1">
        <div className="border flex items-center justify-between px-5 rounded-2xl border-primary">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[85%] outline-none bg-transparent py-1 text-lg"
          />
          <button type="submit" className="bg-none border-none">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-xl text-primary"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Chat);
