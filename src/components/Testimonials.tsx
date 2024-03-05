import React, { useState } from "react";
import service_6 from "../assets/service-6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

type Props = {};

const Testimonials = (props: Props) => {
  const [swipeIndex, setSwipeIndex] = useState<number>(0);

  const Testimonials = [
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
    {
      image: service_6,
      name: "Gabriel",
      testimony:
        "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
    },
  ];
  return (
    <>
      <Swiper
        grabCursor={true}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        {Testimonials.map((data, i) => {
          return (
            <SwiperSlide>
              <div className="flex md:hidden flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 w-fit md:max-w-[22rem] m-auto">
                <div className="flex  items-center gap-4">
                  <img
                    src={data?.image}
                    alt=""
                    className="w-[80px] h-[80px] object-cover"
                  />
                  <div>
                    <p className="text-xl font-bold">{data?.name}</p>
                  </div>
                </div>
                <p>{data?.testimony}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        grabCursor={true}
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        {Testimonials.map((data, i) => {
          return (
            <SwiperSlide>
              <div className="hidden md:flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 w-fit md:max-w-[22rem] m-auto">
                <div className="flex  items-center gap-4">
                  <img
                    src={data?.image}
                    alt=""
                    className="w-[80px] h-[80px] object-cover"
                  />
                  <div>
                    <p className="text-xl font-bold">{data?.name}</p>
                  </div>
                </div>
                <p>{data?.testimony}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
