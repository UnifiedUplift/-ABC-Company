import Image from 'next/image'
import React from 'react'

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
    <section className=''>
      <h2 className='text-[40px] text-bold text-center'>Our Services</h2>
      <div className='flex py-10 px-2 gap-4 justify-center items-center flex-col md:flex-row '>
        {
          services?.map((data, i) => (
            <div key={i} className='bg-white rounded-2xl max-w-72 p-2  border-2 border-green-700'>
              <div className='flex flex-col justify-center items-center '>
                <Image src={data?.url} alt={data?.url} width={52} height={52} />
                <h4 className='text-black mt-2 font-bold'>{data?.title}</h4>
              </div>
              <p className='text-black mt-2'>{data?.discription}</p>=
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Services