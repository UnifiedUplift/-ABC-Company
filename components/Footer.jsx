import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary flex flex-col md:flex-row justify-center  gap-10 px-3 py-10'>
      <div className='flex flex-col md:flex-row md:gap-5 md:border-r-2 pr-3 md:border-gray-500'>
        <h2 className='text-[24px] font-bold'>TRADE</h2>
        <div>
          <h4 className='text-[24px] mt-3 md:mt-16'>Ready to get started?</h4>
          <p className='max-w-lg mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      <div className=' flex flex-col justify-between md:pt-10'>
        <div className='flex flex-col  gap-3 md:gap-4 justify-between md:items-center'>
          <p>Home</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <p className='mt-8 md:mt-0'>© 2024 — 2025 by Trade. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer