"use client"
import Image from 'next/image'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP);

const ServiceCard = ({data}) => {
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
        <div className='bg-white rounded-2xl max-w-34xl  flex flex-col p-10'>
             <h4 id='text' className='text-black text-[20px] mt-2 font-extrabold para'>{data?.title}</h4>
             
            <div className='flex flex-row justify-center items-center  gap-5'>
           
                <p className='text-black mt-2  para max-w-96'>{data?.discription}</p>
                <Image src={data?.url} alt={data?.url} width={100} height={100} />
               
            </div>
           
        </div>
    )
}

export default ServiceCard