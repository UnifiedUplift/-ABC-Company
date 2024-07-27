"use client";
import Image from "next/image";
const ServiceCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl max-w-24xl h-72  flex flex-col p-8">
      <Image src={data?.url} alt={data?.url} width={100} height={100} />
      <h4 id="text" className="text-black text-[20px] mt-2 font-extrabold">
        {data?.title}
      </h4>

      <p className="text-black mt-2">{data?.discription}</p>
    </div>
  );
};

export default ServiceCard;
