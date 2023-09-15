"use client";

import Link from "next/link";
import { button } from "@/animations/button.animation";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  link?: string;
  btn?: boolean;
  onClick?: () => void;
}
const Btn = ({ link = "", name, btn, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  if (btn) {
    return (
      <motion.div
        className="h-fit z-10 relative text-MAIN w-fit"
        variants={button}
        initial="buttonInitial"
        animate={isFocused ? "buttonHover" : isHovered ? "buttonHover" : "buttonInitial"}
      >
        <button
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none block py-4 px-6 bg-transparent rounded-2xl border border-solid border-MAIN text-base w-fit relative overflow-hidden"
        >
          <span className="block z-10 relative">{name}</span>
          <motion.div
            className="absolute left-0 top-0 w-full h-full bg-MAIN z-[-10]"
            variants={button}
            initial="bgInitial"
            animate={isFocused ? "bgHover" : isHovered ? "bgHover" : "bgInitial"}
          ></motion.div>
        </button>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="h-fit z-10 relative text-MAIN w-fit"
        variants={button}
        initial="buttonInitial"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={isHovered ? "buttonHover" : ""}
      >
        <Link
          href={link}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none block py-4 px-6 bg-transparent rounded-2xl border border-solid border-MAIN text-base w-fit relative overflow-hidden"
        >
          <span className="block z-10 relative">{name}</span>
          <motion.div
            className="absolute left-0 top-0 w-full h-full bg-MAIN z-[-10]"
            variants={button}
            initial="bgInitial"
            animate={isHovered ? "bgHover" : ""}
          ></motion.div>
        </Link>
      </motion.div>
    );
  }
};
export default Btn;
