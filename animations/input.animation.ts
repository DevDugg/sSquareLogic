import { Variants } from "framer-motion";
import colors from "@/settings/ui/colors";

export const input: Variants = {
  hidden: {
    left: "50%",
    width: "0%",
    opacity: 0,
    border: "1px solid transparent",
    color: "#B6B6B6",
  },
  focused: {
    left: "0%",
    width: "100%",
    opacity: 1,
    border: `1px solid ${colors.MAIN}`,
    color: colors.MAIN,
  },
};
