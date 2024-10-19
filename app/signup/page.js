'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/components/assets/logo.png'
import { useForm } from "react-hook-form"

const page = () => {

    const [form, setform] = useState({ email: "", password: "", fullname: "", username: "" })

    const { register, formState: { errors },handleSubmit } = useForm();
    const onSubmit = (e) => {
        console.log(JSON.stringify(e))
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='border-[#2E2E2E] border-[1px] bg-[#101010] w-2/6 h-3/4 flex flex-col rounded justify-between items-center py-10 text-[48px]'>
                <div>
                    <Image className='invert h-16 w-48' src={logo} alt="" />
                </div>
                <div className='w-full flex flex-col items-center justify-center space-y-5'>
                    <form className='text-[16px] w-full flex flex-col space-y-5 justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true, maxLength: 20 })} aria-invalid={errors.email ? "true" : "false"} className='px-3 rounded w-8/12 py-2 bg-transparent border outline-none border-[#2E2E2E] text-[#B0B0B0]' type="email" placeholder='Email' />
                        {errors.email?.type === 'required' && <p className='text-[10px]' role="alert">Email is required</p>}
                        <input {...register("password", { required: true, minLength: 8 })} aria-invalid={errors.password ? "true" : "false"} className='px-3 rounded w-8/12 py-2 bg-transparent border outline-none border-[#2E2E2E] text-[#B0B0B0]' type="password" placeholder='Password' />
                        {errors.password?.type === 'required' && <p className='text-[10px]' role="alert">Password is required</p>}
                        <input {...register("fullname", { required: true, maxLength: 20 })} aria-invalid={errors.fullname ? "true" : "false"} className='px-3 rounded w-8/12 py-2 bg-transparent border outline-none border-[#2E2E2E] text-[#B0B0B0]' type="text" placeholder='Full Name' />
                        {errors.fullname?.type === 'required' && <p className='text-[10px]' role="alert">This field is required</p>}
                        <input {...register("username", { required: true, maxLength: 20, pattern: /^[a-z0-9]+$/i })} aria-invalid={errors.username ? "true" : "false"} className='px-3 rounded w-8/12 py-2 bg-transparent border outline-none border-[#2E2E2E] text-[#B0B0B0]' type="text" placeholder='Username' />
                        {errors.username?.type === 'required' && <p className='text-[10px]' role="alert">Username is required</p>}
                        <div className='text-[13px] text-[#B0B0B0] mx-20 text-center'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</div>
                        <input className='border cursor-pointer hover:text-[#414141] hover:bg-[white] transition-colors duration-500 font-bold border-[#414141] text-[#E0E0E0] rounded px-[26px] py-[9px] ' type="submit" value='Sign up' />
                    </form>
                    <div className='text-[14px] text-[#B0B0B0] mx-20 text-center'>
                        <span>
                            Already have an account?
                        </span>
                        <a className='text-[#507cd2]' href="/login">log in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
