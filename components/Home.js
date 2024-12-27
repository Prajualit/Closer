import React from 'react'
import Image from "next/image";
import logo from '@/components/assets/logo.png'

const Home = () => {
    return (
        <div className="flex flex-col justify-center space-y-32 items-center h-screen">
            <div>
                <Image className='invert scale-150' src={logo} alt="" />
            </div>
            <div className="space-y-5 font-[400] flex flex-col justify-center items-center text-center">
                <div className="text-[40px]">
                    Capture Life’s Moments, Stay Connected, and Reflect
                </div>
                <div className="text-[20px] w-[50rem] font-[100]">
                    A personal snapshot of your life that evolves with you. Document your experiences, feelings, and growth all in one app
                </div>
            </div>
        </div>
    )
}

export default Home
