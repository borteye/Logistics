import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faBars } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Navbar = (props: Props) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="flex  items-center justify-between sticky top-0 z-[20000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  bg-black text-white px-4 py-3 w-full">
        <div className="text-header ">Logistica</div>
        <div>
          <ul className="hidden average:flex items-center list-none gap-x-4 cursor-pointer font-medium ">
            <li className="hover:text-primary">
              <a href="/">HOME</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/about-us">ABOUT</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/our-services">SERVICES</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/track-packages">TRACK PACKAGES</a>
            </li>
            <li className="hover:text-primary">
              <a href="/logistica/contact-us">CONTACT</a>
            </li>
            <li className=" flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faHeadphones}
                className="text-primary text-2xl "
              />
              <p className="font-bold text-xl">+012 345 6789</p>
            </li>
          </ul>
          {isMobileNavOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              className=" average:hidden  text-4xl"
              onClick={() => setIsMobileNavOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className=" average:hidden text-4xl"
              onClick={() => setIsMobileNavOpen(true)}
            />
          )}
        </div>
      </nav>
      <ul
        className={` ${
          isMobileNavOpen ? "flex" : "hidden"
        } px-4 flex-col average:hidden gap-4 my-8`}
      >
        <li className="hover:text-primary">
          <a href="/">HOME</a>
        </li>
        <li className="hover:text-primary">
          <a href="/logistica/about-us">ABOUT</a>
        </li>
        <li className="hover:text-primary">
          <a href="/logistica/our-services">SERVICES</a>
        </li>
        <li className="hover:text-primary">
          <a href="/logistica/track-packages">TRACK PACKAGES</a>
        </li>
        <li className="hover:text-primary">
          <a href="/logistica/contact-us">CONTACT</a>
        </li>
        <li className=" flex gap-2 items-center">
          <FontAwesomeIcon
            icon={faHeadphones}
            className="text-primary text-2xl "
          />
          <p className="font-bold text-lg">+012 345 6789</p>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
