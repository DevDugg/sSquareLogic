import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const GrottaRegular = localFont({
  src: [
    {
      path: "/Grotta-Trial-Regular.otf",
      weight: "400",
    },
    {
      path: "/Grotta-Trial-Bold.otf",
      weight: "400",
    },
  ],
  preload: true,
});

export const metadata: Metadata = {
  title: "SquareLogic",
  description: "SquareLogic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GrottaRegular.className}>{children}</body>
    </html>
  );
}
