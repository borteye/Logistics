import React from "react";
import carousel_1 from "../assets/carousel-1.jpg";
import service_1 from "../assets/service-1.jpg";
import Map from "../components/Map";

type Props = {};

const TrackPackage = (props: Props) => {
  return (
    <>
      <section className="mb-[4rem]  ">
        <div className="h-[43vh] relative  ">
          <img
            src={carousel_1}
            alt=""
            className="h-full w-screen object-cover"
          />

          <div className="absolute top-0 bottom-0 w-full flex flex-col justify-center items-start  gap-4 md:gap-8 bg-overlay text-light px-4 md:px-12 py-6 ">
            <h1 className="text-header md:text-6xl font-header leading-tight">
              Track Packages
            </h1>
            <p className="">Home / Pages / Track Packages</p>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]">
        <div className="px-4 md:px-12 ">
          <h1 className="text-xl text-center md:text-2xl average:text-3xl font-semibold mb-[2rem]">
            Enter the Consignment No.
          </h1>
          <div className=" flex justify-between  max-w-[45rem] m-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <input
              type="text"
              className="text-xl py-2 px-2  w-[62%] md:w-[79%] md:px-4 outline-none"
              placeholder="Enter Tracking Number"
            />
            <button className="bg-primary px-2 py-4 md:px-4 md:py-4 md:text-xl font-semibold text-light">
              Track Result
            </button>
          </div>
        </div>
      </section>
      <section className="mb-[8rem]">
        <div className="px-4 md:px-12">
          <Map />
        </div>
      </section>
      <section className="mb-[8rem]">
        <div className="px-4 md:px-12">
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

export default TrackPackage;
