import React from "react";

const Hero = () => {
  return (
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
                <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">The best Apple Watch apps</h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div className="mt-6">
                    <a href="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform border rounded-md md:inline ">Download from App Store</a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://wallpapers-clan.com/wp-content/uploads/2023/11/zelda-link-with-sword-art-desktop-wallpaper-preview.jpg" alt="apple watch photo"/>
        </div>
    </div>
  );
};

export default Hero;
