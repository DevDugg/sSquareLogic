"use client";

import Link from "next/link";
import { button } from "@/animations/button.animation";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  name: string;
  link: string;
}
const Btn = ({ link, name }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
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
        className="block py-4 px-6 bg-transparent rounded-2xl border border-solid border-MAIN text-base w-fit relative overflow-hidden"
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
};
export default Btn;
