import React from 'react'
import Image from 'next/image'



const Footer = () => {

  return (
    <div className='h-[40vh] bg-[#0c0c0c] border-t-2 border-[#2E2E2E] px-16 pt-12 pb-3 flex flex-col justify-between items-start'>
      <div className='flex flex-col justify-start space-y-3'>
        <div className='text-[30px]'>
          Get Started Today :
        </div>
        <div className='w-3/4 text-[#E0E0E0] '>
          Join the Closer community and start capturing your life’s most valuable moments. Sign up now and begin your journey of personal growth and reflection.
        </div>
        <div className='flex space-x-3'>
          <button className='hover:scale-110 duration-500 transition-transform'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#E0E0E0"} fill={"none"}>
              <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className='hover:scale-110 duration-500 transition-transform'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#E0E0E0"} fill={"none"}>
              <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className='hover:scale-110 duration-500 transition-transform'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#E0E0E0"} fill={"none"}>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <ul className='flex text-[13px] space-x-3 text-[#B0B0B0]'>
        <a href="">
          <li className='hover:underline'>About</li>
        </a>
        <a href="">
          <li className='hover:underline'>Privacy Policy</li>
        </a>
        <a href="">
          <li className='hover:underline'>Terms of Service</li>
        </a>
        <a href="">
          <li className='hover:underline'>Contact Us</li>
        </a>
      </ul>
    </div >
  )
}

export default Footer
