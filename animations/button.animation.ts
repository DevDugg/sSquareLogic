import { Variants } from "framer-motion";
import colors from "@/settings/ui/colors";

export const button: Variants = {
  buttonInitial: {
    color: colors.MAIN,
    transition: {
      type: "tween",
    },
  },
  buttonHover: {
    color: colors.WHITE,
    transition: {
      type: "tween",
    },
  },
  bgInitial: {
    y: "100%",
    transition: {
      type: "tween",
    },
  },
  bgHover: {
    y: "0%",
    transition: {
      type: "tween",
    },
  },
};
