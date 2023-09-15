"use client";

import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

import { input } from "@/animations/input.animation";
import { motion } from "framer-motion";

interface Props {
  name: string;
  value: string;
  type?: HTMLInputTypeAttribute | undefined;
  setter: (value: string) => void;
  required?: boolean;
}

const CustomInput = ({ name, setter, value, type = "text", required }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className="custom-input relative w-full">
      <input
        required={required}
        type={type}
        name={name.toLowerCase()}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setter(e.target.value)}
        placeholder={name}
        className="bg-transparent outline-none text-lg w-full placeholder:text-[#B6B6B6] text-WHITE py-2 px-2 border-b border-solid border-[#B6B6B6]"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <motion.div
        className="absolute h-[1px] bottom-0 left-[50%]"
        variants={input}
        initial="initial"
        animate={isFocused ? "focused" : "initial"}
      ></motion.div>
    </div>
  );
};
export default CustomInput;
