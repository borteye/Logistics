import React, { useState } from "react";
import carousel_1 from "../assets/carousel-1.jpg";
import about from "../assets/about.jpg";
import service_1 from "../assets/service-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faGlobe,
  faLocationDot,
  faPhoneVolume,
  faShip,
  faStar,
  faTruckFast,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};
gsap.registerPlugin(ScrollTrigger);

const About = (props: Props) => {
  const [countOn, setCountOn] = useState<boolean>(false);

  gsap.to(".box", {
    scrollTrigger: ".box",
  });
  ScrollTrigger.create({
    trigger: ".box",
    onEnter: () => setCountOn(true),
    onLeave: () => setCountOn(false),
  });
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
              About Us
            </h1>
            <p className="">Home / Pages / About</p>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]  ">
        <div className=" px-4 md:px-12 py-6 flex flex-col average:flex-row gap-8 ">
          <img
            src={about}
            alt=""
            className="   h-[70vh] md:w-[40rem] md:m-auto average:w-[30rem] average:h-[100vh]  object-cover "
          />
          <div className="flex flex-col gap-8 average:w-[80%]">
            <div>
              <h2 className="font-header text-small-header text-secondary">
                ABOUT US
              </h2>
              <h1 className="text-2xl font-semibold">
                Quick Transport and Logistics Solutions
              </h1>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              odio tenetur doloremque aliquid. Officia, sunt molestiae? Odit
              voluptas harum est, nobis unde adipisci exercitationem beatae
              aliquam at, voluptate atque doloribus.
            </p>
            <div className="flex flex-col justify-between gap-8 small:grid small:grid-cols-2 m-auto">
              <div className="flex flex-col gap-4  ">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-icon-size text-primary w-fit"
                />
                <h2 className="font-bold text-xl">Global coverage</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus
                </p>
              </div>
              <div className="flex flex-col gap-4  ">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-icon-size text-primary w-fit"
                />
                <h2 className="font-bold text-xl">On Time Delivery</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="text-icon-size text-primary w-fit"
                />
                <h2 className="font-bold text-xl">Working Hours</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-icon-size text-primary w-fit"
                />
                <h2 className="font-bold text-xl">Our Location</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus
                </p>
              </div>
            </div>
            <button className="bg-primary text-light px-8 py-4 text-xl font-emphasis w-fit">
              Explore More
            </button>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]">
        <div className=" px-4 md:px-12 py-6 flex flex-col average:flex-row gap-10  ">
          <div className="flex flex-col gap-8   average:w-[100%]">
            <div>
              <h2 className="font-header text-small-header text-secondary">
                SOME FACTS
              </h2>
              <h1 className="text-2xl font-semibold">
                #1 Place To Manage All Of Your Shipments
              </h1>
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
          <div className="text-light flex flex-col w-full small:flex-row small:items-center small:justify-between average:justify-end  gap-6">
            <div className="flex flex-col w-full  average:w-fit gap-6">
              <div className="box bg-green-600 p-6 small:w-[15rem] md:w-[80%] average:w-[15rem]  ">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-medium-icon-size"
                />
                {/* <ScrollTrigger>
                  
                </ScrollTrigger> */}
                <h1 className="text-header font-medium">
                  {countOn && (
                    <CountUp start={0} end={251} duration={3} delay={1} />
                  )}
                </h1>
                <p>Happy Clients</p>
              </div>
              <div className="box bg-green-600 p-6 small:w-[15rem] md:w-[80%] average:w-[15rem]">
                <FontAwesomeIcon
                  icon={faShip}
                  className="text-medium-icon-size"
                />
                <h1 className="text-header font-medium">
                  {countOn && (
                    <CountUp start={0} end={126} duration={3} delay={1} />
                  )}
                </h1>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className=" small:w-[27rem] md:w-[80%] average:w-[15rem]">
              <div className="box bg-green-600 p-6 ">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-medium-icon-size"
                />
                <h1 className="text-header font-medium">
                  {countOn && (
                    <CountUp start={0} end={439} duration={3} delay={1} />
                  )}
                </h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]  ">
        <div className="px-4 md:px-12 py-6 flex flex-col gap-8 ">
          <div className="text-center">
            <h2 className="font-header text-small-header text-secondary">
              OUR TEAM
            </h2>
            <h1 className="text-2xl font-semibold">Expert Team Members</h1>
          </div>
          <div className="grid md:grid-cols-2 average:grid-cols-4    gap-6">
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col gap-4 w-fit md:w-[100%]   m-auto  ">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col gap-4 w-fit md:w-[100%] m-auto ">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col gap-4 w-fit md:w-[100%]   m-auto  ">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col gap-4 w-fit md:w-[100%] m-auto ">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-2">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
