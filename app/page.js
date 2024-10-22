'use client'
import Image from "next/image";
import logo from '@/components/assets/logo.png'
import logoletter from '@/components/assets/logoletter.png'
import Link from "next/link";

export default function Home() {



  return (
    <div className="h-screen">
      <div className="absolute top-0 w-full h-[10%] backdrop-blur-3xl bg-transparent z-50 flex items-center justify-between px-14">
        <div>
          <Image className='invert ' src={logoletter} alt="" />
        </div>
        <div className="space-x-5">
          <a href="/about">
            <button className="border bg-[#101010] hover:bg-white hover:text-black transition-colors duration-500 border-[#2E2E2E] px-5 py-2 rounded">About us</button>
          </a>
          <a href="/signup">
            <button className="border bg-[#101010] hover:bg-white hover:text-black transition-colors duration-500 border-[#2E2E2E] px-5 py-2 rounded">Sign up</button>
          </a>
          <a href="/login">
            <button className="border bg-[#101010] hover:bg-white hover:text-black transition-colors duration-500 border-[#2E2E2E] px-5 py-2 rounded">Log in</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center h-[90%]">
        <div>
          <Image className='invert scale-150' src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
