import React from 'react'
import Image from 'next/image'
import logo from '@/components/assets/logo.png'

const page = () => {
    return (
        <div className='bg-black h-screen flex justify-center items-center '>
            <div className='border-r border-[#2E2E2E] h-full px-10 py-12 w-[20rem] flex justify-between border items-start flex-col space-y-20'>
                <Image className='invert h-10 w-[120px]' src={logo} alt="Logo" />
                <div className='flex flex-col h-[70%] justify-between'>
                    <div className='flex flex-col h-full justify-start space-y-7'>
                        <div className='font-bold text-[17px]'>
                            <span>Home</span>

                        </div>
                        <div className='font-bold text-[17px]'>
                            <span>Search</span>

                        </div>
                        <div className='font-bold text-[17px]'>
                            <span>Messages</span>

                        </div>
                        <div className='font-bold text-[17px]'>
                            <span>Profile</span>

                        </div>
                    </div>
                    <div className='font-bold text-[17px]'>
                        <span>More</span>

                    </div>
                </div>
            </div>
            <div className='h-full w-full'>

            </div>
        </div>
    )
}

export default page
