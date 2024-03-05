import firebase from "firebase/compat/app";
import db from "./firebaseConfig";

async function sendMessageToSupportChat(text: string) {
  const collectionRef = await db
    .collection("conversation")
    .doc("zZVdgLWhnRSsvfyoXmmx")
    .collection("messages");
  //* Generate an auto-generated UID
  const uid = collectionRef.doc().id;
  await collectionRef.doc(uid).set(
    {
      id: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      message: text,
      sender: "You",
    },
    { merge: true }
  );
}

export { sendMessageToSupportChat };
