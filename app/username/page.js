'use client'

import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import Sidebar from '@/components/Sidebar'
import emoji from '@/components/assets/emoji.svg'
import gif from '@/components/assets/gif.svg'
import post from '@/components/assets/post.svg'
import media from '@/components/assets/media.svg'

const page = () => {

    const [thought, setThought] = useState("")

    const isDisabled = (thought.length === 0)

    const handlePost = () => {
        console.log(thought)
    }

    return (
        <div className='bg-black h-screen flex justify-center items-center '>
            <Sidebar />
            <div className="h-full w-full flex justify-center items-end pb-10">
                <div
                    className="group border bg-[#0a0a0a] border-[#2E2E2E] flex flex-col items-start justify-between rounded-2xl py-2 px-3 w-1/2 hover:border-[#8d8d8d] focus-within:border-[#8d8d8d] container"
                >
                    <div className='flex items-start w-full justify-between'>
                        <input
                            value={thought}
                            onChange={(e) => setThought(e.target.value)}
                            placeholder="Express your thought..."
                            className="w-full placeholder-neutral-500 text-[18px] bg-transparent py-1 outline-none"
                            type="text"
                        />
                        <button onClick={()=>handlePost()} disabled={isDisabled} className={`p-3 rounded-full group-focus-within:opacity-100 opacity-0 transition-all duration-300
                                ${isDisabled
                                ? 'bg-neutral-500 text-gray-300 cursor-not-allowed hover:scale-100'
                                : 'hover:scale-110 bg-white'
                            }
                                `}>
                            <Image src={post} alt="" width={24} height={24} />
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 justify-between w-full group-focus-within:opacity-100 opacity-0 transition-all delay-100 duration-300">
                            <button className='hover:scale-110'>
                                <Image src={emoji} alt="" width={24} height={24} />
                            </button>
                            <button className='hover:scale-110'>
                                <Image src={gif} alt="" width={24} height={24} />
                            </button>
                            <button className='hover:scale-110'>
                                <Image src={media} alt="" width={24} height={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
    .container {
        height: 3.3rem; /* Default height */
        border: 1px solid #2E2E2E;
        transition: height 0.3s ease-in-out, border 0.3s ease-in-out; /* Smooth transition */
    }
    .container:focus-within {
        height: 6rem; /* Expanded height when input is focused */
        border-color: #8d8d8d;
    }
    .container:hover {
        border-color: #8d8d8d;
    }
`}
                </style>
            </div>
        </div>
    )
}

export default page
