import React from 'react'

const Features = () => {
    return (
        <div className='h-screen bg-[#0c0c0c] flex px-24 justify-center items-start space-y-10 flex-col'>
            <div className='text-[48px]'>
                Feature Overview
            </div>
            <div className='flex flex-col space-y-4'>
                <span className='text-[22px]'>
                    Your Digital Life Diary
                </span>
                <span className='font-extralight text-[18px]'>
                    Closer is your personal space to store thoughts, photos, and memories that matter. Reflect on past experiences and track your personal growth effortlessly.
                </span>
            </div>
            <div className='flex flex-col w-full space-y-4'>
                <span className='text-[22px]'>
                    Key Features
                </span>
                <div className=' w-full rounded h-[18rem] bg-[#121212] space-x-3 flex p-3'>
                    <div className='border border-[#2E2E2E] bg-[#0c0c0c] rounded w-full px-10 py-9 justify-center space-y-8 flex-col flex'>
                        <span className='text-[24px]'>Life Moments Snapshot</span>
                        <span className='font-extralight text-[18px]'>Capture and organize life’s precious moments with our intuitive interface.</span>
                    </div>
                    <div className='border border-[#2E2E2E] bg-[#0c0c0c] rounded w-full justify-center px-10 py-9 space-y-8 flex-col flex'>
                        <span className='text-[24px]'>Secure and Private</span>
                        <span className='font-extralight text-[18px]'>Your entries are safe, encrypted, and for your eyes only. Privacy is a top priority</span></div>
                    <div className='border border-[#2E2E2E] bg-[#0c0c0c] rounded w-full justify-center px-10 py-9 space-y-8 flex-col flex'>
                        <span className='text-[24px]'>Reflect & Grow</span>
                        <span className='font-extralight text-[18px]'>Use personalized insights to reflect on your journey, gain perspective, and celebrate growth</span></div>
                </div>
            </div>
        </div>
    )
}

export default Features
