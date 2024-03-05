import React from "react";
import carousel_1 from "../assets/carousel-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <section className="mb-[8rem]  ">
        <div className="h-[43vh] relative  ">
          <img
            src={carousel_1}
            alt=""
            className="h-full w-screen object-cover"
          />

          <div className="absolute top-0 bottom-0 w-full flex flex-col justify-center items-start  gap-4 md:gap-8 bg-overlay text-light px-4 md:px-12 py-6 ">
            <h1 className="text-header md:text-6xl font-header leading-tight">
              Contact Us
            </h1>
            <p className="">Home / Pages / Contact</p>
          </div>
        </div>
      </section>
      <section className="mb-[8rem] ">
        <div className="flex flex-col average:flex-row average:w-full px-4 md:px-12 py-6 gap-16 average:gap-8">
          <div className=" flex flex-col gap-8  average:w-[85%] ">
            <div>
              <h2 className="font-header text-small-header text-secondary">
                GET A QOUTE
              </h2>
              <h1 className="text-2xl font-semibold">Request a free Qoute!</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              odio tenetur doloremque aliquid. Officia, sunt molestiae? Odit
              voluptas harum est, nobis unde adipisci
            </p>
            <div className="flex gap-4">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="text-medium-icon-size bg-primary text-light p-4 "
              />
              <div>
                <p className="font-header">Call for any query!</p>
                <p className="font-header text-2xl text-primary">
                  +233 603847720
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ff909048] p-6 average:w-[100%] ">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 small:flex-row small:flex-wrap  ">
                <div className="small:w-[48%] ">
                  <input
                    type="text"
                    className="w-full  px-3 py-4 text-lg outline-none border-none"
                    placeholder="Your Name"
                  />
                </div>

                <div className="small:w-[48%]  ">
                  <input
                    type="text"
                    className="w-full  px-3 py-4 text-lg outline-none border-none"
                    placeholder="Your Name"
                  />
                </div>

                <div className="small:w-[48%] ">
                  <input
                    type="text"
                    className="w-full  px-3 py-4 text-lg outline-none border-none"
                    placeholder="Your Name"
                  />
                </div>

                <div className="small:w-[48%] ">
                  <select className="w-full px-3 py-4 borde text-lg outline-none border-none">
                    <option>Select A Freight</option>
                    <option value="">Freight 1</option>
                    <option value="">Freight 2</option>
                    <option value="">Freight 3</option>
                  </select>
                </div>
              </div>
              <textarea
                cols={10}
                rows={1}
                className="w-full px-3 py-4 text-lg outline-none border-none"
                placeholder="Your Name"
              ></textarea>
              <button className="bg-primary text-light font-medium  py-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
