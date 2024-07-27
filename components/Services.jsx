import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  let services = [
    {
      title: "Web Designing",
      details:
        "Craft stunning, responsive websites that captivate your audience and enhance user experience with our creative design expertise.",
      url: "/assets/web-design.png",
    },
    {
      title: "Web Development",
      details:
        "Develop robust, scalable websites tailored to your needs, ensuring top performance and seamless functionality.",
      url: "/assets/wed-development.png",
    },
    {
      title: "SEO",
      details:
        "Boost your online presence and attract more visitors with our expert SEO strategies for higher search engine rankings.",
      url: "/assets/seo.png",
    },
  ];
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] bg-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold  text-blue-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-black sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color text-slate-700">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
        {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              details={service.details}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
