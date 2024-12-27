import Image from 'next/image'
import React from 'react'
import Sidebar from '@/components/Sidebar'

const page = () => {
    return (
        <div className='bg-black h-screen flex justify-center items-center '>
            <Sidebar />
            <div className='h-full w-full flex justify-center items-end pb-10'>
                <div className='border bg-[#0a0a0a] border-[#2E2E2E] flex flex-col items-start rounded-2xl py-2 px-3 w-1/2 '>
                    <input placeholder='Express your thought...' className='w-full placeholder-neutral-500 text-[18px] bg-transparent px-2 py-1 outline-none' type="text" />
                </div>
            </div>
        </div>
    )
}

export default page
