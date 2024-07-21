import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary flex flex-col md:flex-row justify-center items-center gap-10 py-10 border-2 border-red-500'>
      <div className='flex flex-col md:flex-row gap-5 md:border-r-2  md:border-gray-500'>
        <h2 className='text-[24px] font-bold'>TRADE</h2>
        <div>
          <h4 className='text-[24px] mt-16'>Ready to get started?</h4>
          <p className='max-w-lg mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center'>
        <div>
          <p>Home</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <p className=''>© 2024 — 2025 by Trade. All Rights Reserved</p>

      </div>


    </div>
  )
}

export default Footer