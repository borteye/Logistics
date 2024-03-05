import React from "react";
import carousel_1 from "../assets/carousel-1.jpg";
import service_1 from "../assets/service-1.jpg";
import Testimonials from "../components/Testimonials";

type Props = {};

const Services = (props: Props) => {
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
              Services
            </h1>
            <p className="">Home / Pages / Services</p>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]">
        <div className="px-4 md:px-12 py-6  flex flex-col gap-6 ">
          <div className="text-center">
            <h2 className="font-header text-small-header text-secondary">
              OUR SERVICES
            </h2>
            <h1 className="text-2xl font-semibold">EXPLORE OUR SERVICES</h1>
          </div>
          <div className="grid md:grid-cols-2 average:grid-cols-4  gap-6">
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col w-fit md:w-[100%] m-auto gap-4">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button className="bg-primary text-light px-6 py-1 w-fit">
                Read More
              </button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col w-fit md:w-[100%] m-auto gap-4">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button className="bg-primary text-light px-6 py-1 w-fit">
                Read More
              </button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col w-fit md:w-[100%] m-auto gap-4">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button className="bg-primary text-light px-6 py-1 w-fit">
                Read More
              </button>
            </div>
            <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col w-fit md:w-[100%] m-auto gap-4">
              <img src={service_1} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="font-header text-2xl">Air Freight</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <button className="bg-primary text-light px-6 py-1 w-fit">
                Read More
              </button>
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
      <section className="mb-[8rem]">
        <div className="flex flex-col  px-4 md:px-12 py-6 gap-6">
          <div className="text-center">
            <h2 className="font-header text-small-header text-secondary">
              TESTIMONIAL
            </h2>
            <h1 className="text-2xl font-semibold">Our Clients Say!</h1>
          </div>
          <div>
            <Testimonials />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
