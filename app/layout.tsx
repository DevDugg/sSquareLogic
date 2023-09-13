import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GrottaRegular = localFont({
  src: [
    {
      path: "../public/Grotta-Trial-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/Grotta-Trial-Regular.otf",
      weight: "400",
    },
  ],
  preload: true,
});

export const metadata: Metadata = {
  title: "SquareLogic",
  description: "SquareLogic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GrottaRegular.className} bg-BG`}>{children}</body>
    </html>
  );
}

