"use client";

import { input } from "@/animations/input.animation";
import { motion } from "framer-motion";

interface Props {
  name: string;
  link: string;
}

const FooterLink = ({ link, name }: Props) => {
  return (
    <motion.li className="relative" initial="initial" whileHover="focused">
      <a href={link}>{name}</a>
      <motion.div className="absolute h-[1px] bottom-0 left-[50%]" variants={input}></motion.div>
      <motion.div className="absolute h-[1px] bottom-0 left-[50%]" variants={input}></motion.div>
    </motion.li>
  );
};
export default FooterLink;
