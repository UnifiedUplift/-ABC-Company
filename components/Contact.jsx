import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    let contactDetails = [
        {
            url: "/assets/email.png",
            text: "unifileduplift@gmail.com"
        },
        {
            url: "/assets/phone-call.png",
            text: "+91 8590059470"
        },
        {
            url: "/assets/maps-and-flags.png",
            text: "Calicut, Kerala"
        }
    ]

    let socialMedia = [
        {
            url: "/assets/instagram.png",
            profile: "https://www.instagram.com/"
        },
        {
            url: "/assets/linkedin-logo.png",
            profile: "https://in.linkedin.com/"
        },
        {
            url: "/assets/x.png",
            profile: "https://x.com/"
        }
    ]
    return (
        <section className=' py-10 px-2'>
            <h1 className='text-[40px] text-bold text-center'>Contact Us</h1>
            <div className='flex flex-col md:flex-row justify-center  gap-10 mt-10'>

                <div className=''>
                    <h3 className='text-[25px] font-extrabold max-w-[280px]'>Let’s discusson something cool together</h3>

                    <div className='flex flex-col gap-5 mt-10'>
                        {contactDetails?.map((data, i) => (
                            <div className='flex gap-5 items-center'>
                                <div className='bg-white w-[45px] flex justify-center items-center rounded-sm p-2'>
                                    <Image src={data?.url} alt={data?.url} width={24} height={24} />
                                </div>
                                <p>{data?.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='md:w-[40%]'>
                    <form className='flex flex-col gap-2 ' action="">
                        <div className='flex flex-col gap-2 '>
                            <input className="rounded-lg p-2 focus:outline-none text-black " type="text" placeholder='Enter Your Name' />
                            <input className="rounded-lg p-2 focus:outline-none  text-black " type="text" placeholder='Enter Your Email' />
                            <textarea className="rounded-lg p-2 focus:outline-none  text-black " name="" placeholder='Enter Message' id=""></textarea>
                        </div>
                        <button className='bg-white text-black flex gap-2 p-3 rounded-lg items-center justify-center '>  <Image src={'/assets/send.png'} alt={"sentImage"} width={18} height={18} />send message</button>
                    </form>

                </div>

            </div>

            <div className='flex gap-5 mt-10 justify-center items-center'>
                {
                    socialMedia?.map((data, i) => (
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white w-[45px] flex justify-center items-center rounded-sm p-2'>
                                <Image src={data?.url} alt={data?.url} width={24} height={24} />
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Contact