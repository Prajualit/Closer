import React from 'react'
import Image from 'next/image'
import logo from '@/components/assets/logo.png'
import home from '@/components/assets/home.svg'
import search from '@/components/assets/explore.svg'
import messages from '@/components/assets/message.svg'
import profile from '@/components/assets/profile.svg'

const Sidebar = () => {
    return (
        <div className='border-r border-[#2E2E2E] h-full px-6 py-12 w-[20rem] flex justify-between border items-start flex-col space-y-20'>
            <Image className='invert h-10 w-[120px]' src={logo} alt="Logo" />
            <div className='flex flex-col h-full justify-start space-y-6 w-full'>
                <div className='flex items-center justify-start space-x-5 py-3 px-3 rounded-xl cursor-pointer transition-colors duration-500 hover:bg-[#ffffff1d] text-[17px]'>
                    <Image src={home} alt="" />
                    <span>Home</span>
                </div>
                <div className='flex items-center justify-start space-x-5 py-3 px-3 rounded-xl cursor-pointer transition-colors duration-500 hover:bg-[#ffffff1d] text-[17px]'>
                    <Image src={search} alt="" />
                    <span>Search</span>
                </div>
                <div className='flex items-center justify-start space-x-5 py-3 px-3 rounded-xl cursor-pointer transition-colors duration-500 hover:bg-[#ffffff1d] text-[17px]'>
                    <Image src={messages} alt="" />
                    <span>Messages</span>
                </div>
                <div className='flex items-center justify-start space-x-5 py-3 px-3 rounded-xl cursor-pointer transition-colors duration-500 hover:bg-[#ffffff1d] text-[17px]'>
                    <Image src={profile} alt="" />
                    <span>Profile</span>
                </div>
            </div>
            <div className='font-bold text-[17px]'>
                <span>More</span>

            </div>
        </div>
    )
}

export default Sidebar
