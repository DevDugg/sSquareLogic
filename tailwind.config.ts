import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BG: "#171717",
        WHITE: "#F2F2F2",
        BLACK: "#181818",
        MAIN: "#3DAF7F",
      },
      backgroundImage: {
        BG: "url('/grid.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
