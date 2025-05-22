"use client";

import { useState } from "react";

import Nav from "@/components/Nav";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <header>
        <Nav />
        <Jumbotron />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
