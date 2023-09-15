"use client";

import { letter, sentence } from "@/animations/text.animation";

import Container from "../Container";
import footer from "@/settings/data/footer";
import { motion } from "framer-motion";
import { v4 } from "uuid";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex items-center justify-between">
        <h2 className="text-[64px] text-WHITE font-bold flex flex-col">
          {footer.title.map((item) => (
            <motion.span key={v4()} variants={sentence} initial="hidden" whileInView="visible">
              {item.split("").map((char) => {
                return (
                  <motion.span key={`char-${v4()}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          ))}
        </h2>
      </Container>
    </footer>
  );
};
export default Footer;
