import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, details, url }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 shadow">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
          <Image src={url} alt={title} width={50} height={50}  />
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h4>
          <p className="text-body-color text-slate-500">{details}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
