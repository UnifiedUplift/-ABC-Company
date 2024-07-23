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
        <div className='bg-white rounded-2xl max-w-72 p-2 '>
            <div className='flex flex-col justify-center items-center '>
                <Image src={data?.url} alt={data?.url} width={72} height={72} />
                <h4 id='text' className='text-black mt-2 font-extrabold para'>{data?.title}</h4>
            </div>
            <p className='text-black mt-2 font-medium para'>{data?.discription}</p>=
        </div>
    )
}

export default ServiceCard