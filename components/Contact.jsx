"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
gsap.registerPlugin(useGSAP);
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

    useGSAP(() => {
       
        gsap.fromTo('.para',{
          opacity:0,
          y:20
        },{
          opacity:1,
          y:0,
          stagger:0.1
        })

    }, [])
    return (
        <section className=' py-10 px-2 screen-max-width'>
            <h1 id='text' className='text-[40px] text-bold text-center para'>Contact Us</h1>
            <div className='flex flex-col md:flex-row  gap-10 mt-10 justify-center'>

                <div className='md:w-[40%]'>
                    <h3 className='text-[25px] font-extrabold max-w-[480px] para'>Let’s discusson something cool together</h3>

                    <div className='flex flex-col gap-5 mt-10'>
                        {contactDetails?.map((data, i) => (
                            <div className='flex gap-5 items-center font-medium'>
                                <div className='bg-white w-[45px] flex justify-center items-center rounded-sm p-2'>
                                    <Image src={data?.url} alt={data?.url} width={24} height={24} />
                                </div>
                                <p>{data?.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='md:w-[45%] bg-slate-200 p-5 rounded-xl '>
                    <form className='flex flex-col ' action="">
                        <div className='flex flex-col gap-3 '>
                            <input className="rounded-lg p-2 outline text-black " type="text" placeholder='Enter Name' />
                            <input className="rounded-lg p-2 outline text-black " type="text" placeholder='Enter Email' />
                            <input className="rounded-lg p-2 outline text-black " type="text" placeholder='Enter Mobile Number' />
                            <textarea className="rounded-lg p-2 outline   text-black " name="" placeholder='Enter Message' id=""></textarea>
                        </div>
                        <button className='bg-black text-white flex gap-2 p-3 font-extrabold rounded-lg items-center justify-center mt-6'>send message</button>
                    </form>

                </div>

            </div>

            <div className='flex gap-5 mt-10 justify-center items-center'>
                {
                    socialMedia?.map((data, i) => (
                        <div className='flex gap-5 items-center'>
                            <div className='bg-white p-1 flex justify-center items-center rounded-lg '>
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