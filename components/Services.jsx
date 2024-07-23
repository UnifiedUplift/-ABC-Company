import Image from 'next/image'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  let services = [
    {
      title: "Web Designing",
      discription: "Craft stunning, responsive websites that captivate your audience and enhance user experience with our creative design expertise.",
      url: "/assets/web-design.png"
    },
    {
      title: "Web Development",
      discription: "Develop robust, scalable websites tailored to your needs, ensuring top performance and seamless functionality.",
      url: "/assets/wed-development.png"
    },
    {
      title: "SEO",
      discription: "Boost your online presence and attract more visitors with our expert SEO strategies for higher search engine rankings.",
      url: "/assets/seo.png"
    }

  ]
  return (
    <section className='screen-max-width'>
      <h2 className='text-[40px] text-bold text-center opacity-0 translate-y-10'>Our Services</h2>
      <div className='flex py-10 px-2 w-full justify-center md:justify-between items-center flex-col md:flex-row '>
        {
          services?.map((data, i) => (
           <ServiceCard data={data} key={i}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services