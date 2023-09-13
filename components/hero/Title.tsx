"use client";
import { letter, sentence } from "@/animations/text.animation";
import profile from "@/settings/data/profile";
import { motion } from "framer-motion";
import { v4 } from "uuid";

const Title = () => {
  return (
    <div className="title flex justify-center text-WHITE text-center">
      <div className="flex flex-col gap-8 items-center max-w-[950px]">
        <motion.h2
          className="text-[64px] font-bold leading-normal"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {profile.title.split("").map((char) => {
            return (
              <motion.span key={`char-${v4()}`} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
        <motion.h3 variants={sentence} initial="hidden" animate="visible" className="text-lg">
          {profile.subTitle.split("").map((char) => {
            return (
              <motion.span key={`char-${v4()}`} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h3>
      </div>
    </div>
  );
};
export default Title;
