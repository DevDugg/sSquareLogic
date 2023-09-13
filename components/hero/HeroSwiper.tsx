"use client";

import HeroSwiperSlide from "./HeroSwiperSlide";
import Marquee from "react-fast-marquee";
import hero from "@/settings/data/hero";
import { v4 } from "uuid";

const HeroSwiper = () => {
  return (
    <div className="hero-swiper">
      <Marquee className="grid grid-cols-4" autoFill>
        {hero.items.map((item) => {
          return <HeroSwiperSlide img={item.img} link={item.link} key={v4()} />;
        })}
      </Marquee>
    </div>
  );
};
export default HeroSwiper;
