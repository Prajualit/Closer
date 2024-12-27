'use client'
import Image from "next/image";
import logo from '@/components/assets/logo.png'
import logoletter from '@/components/assets/logoletter.png'
import Link from "next/link";
import Navbar from '@/components/Navbar'
import Home from "@/components/Home";
import Features from "@/components/Features";
import Whycloser from "@/components/Whycloser";
import Footer from "@/components/Footer";

export default function page() {

  return (
    <div className="">
      <Navbar />
      <Home />
      <Features />
      <Whycloser />
      <Footer />
    </div>
  );
}
