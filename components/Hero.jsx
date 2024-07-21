import React from "react";

const Hero = () => {
  return (
    <div className="flex   md:h-[700px] w-full ">
      <div className="flex w-full px-[150px]  py-[55px] h-[480]">
        <div className="flex flex-col justify-center items-center pl-10">
          <h1 className="text-[40px] font-bold mb-2">
            Your Best Value Proposition{" "}
          </h1>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="p-4 border rounded-md mt-5">
            Start free trils{" "}
          </button>
        </div>
        <div className="md:w-full">
          <img
            src="https://wallpapers-clan.com/wp-content/uploads/2023/11/zelda-link-with-sword-art-desktop-wallpaper-preview.jpg"
            alt="Card image"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
