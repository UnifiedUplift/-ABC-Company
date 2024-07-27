import Image from 'next/image'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  let services = [
    {
      title: "Web Designing",
      discription: "Craft stunning, responsive websites that captivate your audience and enhance user experience with our creative design expertise.",
      url: "/assets/vscode.png"
    },
    {
      title: "Web Development",
      discription: "Develop robust, scalable websites tailored to your needs, ensuring top performance and seamless functionality.",
      url: "/assets/design.png"
    },
    {
      title: "SEO",
      discription: "Boost your online presence and attract more visitors with our expert SEO strategies for higher search engine rankings.",
      url: "/assets/seoImage.png"
    },
    {
      title: "Web Designing",
      discription: "Craft stunning, responsive websites that captivate your audience and enhance user experience with our creative design expertise.",
      url: "/assets/vscode.png"
    },
    {
      title: "Web Development",
      discription: "Develop robust, scalable websites tailored to your needs, ensuring top performance and seamless functionality.",
      url: "/assets/design.png"
    },
    {
      title: "SEO",
      discription: "Boost your online presence and attract more visitors with our expert SEO strategies for higher search engine rankings.",
      url: "/assets/seoImage.png"
    }

  ]
  return (
    <section className='mt-8'>
      <h2 className='text-[40px] text-black font-extrabold text-center '>Our Services</h2>
      <div className='grid grid-cols-3 py-8 px-10 w-full justify-center gap-10 '>
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