import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    // <div className="bg-[#0b0e29] bg-cover bg-center relative  border border-red-500">
    <div className="bg-map bg-cover bg-center bg-[#0b0e29] text-light  w-full flex flex-col gap-4  px-4 md:px-12 py-6 ">
      <div className="flex flex-col  average:flex-row average:gap-8 average:mt-14">
        <div className="flex flex-col md:flex-row  gap-8 mt-[4rem] average:mt-0 average:w-[50%] ">
          <ul className=" md:w-[50%]  ">
            <h1 className="text-[1.25rem] font-bold mb-4">Address</h1>
            <li>123 Street, New York, USA</li>
            <li>+012 345 67890</li>
            <li>info@example.com</li>
          </ul>
          <ul className=" md:w-[50%] ">
            <h1 className="text-[1.25rem] font-bold mb-4">Services</h1>
            <li>Air Freight</li>
            <li>Sea Freight</li>
            <li>Road Freight</li>
            <li>Logistic Solution</li>
            <li>Industry Solution</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-8 average:mt-0  average:w-[50%] ">
          <ul className=" md:w-[50%] cursor-pointer ">
            <h1 className="text-[1.25rem] font-bold mb-4">Quick Links</h1>
            <li className="hover:text-primary">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/about-us">About</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/our-services">Services</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/track-packages">TRACK PACKAGES</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/contact-us">Contact</a>
            </li>
          </ul>
          <div className="md:w-[50%]">
            <h1 className="text-[1.25rem] font-bold mb-4">Newsletter</h1>
            <p className="mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
            <div className="bg-light flex px-2 py-2 relative max-w-[25rem]">
              <input
                type="text"
                placeholder="Your email"
                className="bg-transparent outline-none text-black text-paragraph py-[0.4rem] pl-6"
              />
              <button className="bg-primary px-4 py-2 absolute top-[0.4rem] right-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center md:text-left">
        Copyright © 2024 Ship24. All Rights Reserved.
      </div>
    </div>
    // </div>
  );
};

export default Footer;
