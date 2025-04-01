import { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import FontAwesomeConfig from "@/lib/fontawesome";

import Nav from "@/components/Nav";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";

const poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Poppins-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yayasan Cipta Mandiri",
  description: "Namely Foundation in Bogor",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <FontAwesomeConfig />
        </head>
        <body className={poppins.variable}>
          <header>
            <Nav />
            <Jumbotron />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
