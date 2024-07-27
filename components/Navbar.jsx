"use client";
import React, { useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const links = [
    { label: "Home", to: "home" },
    { label: "Services", to: "services" },
    { label: "Contact", to: "contact" },
    { label: "About", to: "about" },
  ];

  const tradeRef = useRef(null);
  const linkRefs = useRef([]);
  useEffect(() => {
    const tradeLetters = tradeRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      tradeLetters,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );

    // Animate link labels
    linkRefs.current.forEach((linkRef) => {
      const letters = linkRef.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
      );
    });
  }, []);
  return (
    <nav className="bg-primary shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1
              ref={tradeRef}
              className="font-bold text-2xl text-white hover:text-white"
            >
              {"TRADEERTR".split("").map((char, index) => (
                <span key={index} className="letter">
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <ScrollLink
                    key={index}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-white hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    <span
                      ref={(el) => (linkRefs.current[index] = el)}
                      className="link-label"
                    >
                      {link.label.split("").map((char, idx) => (
                        <span key={idx} className="letter">
                          {char}
                        </span>
                      ))}
                    </span>
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block "></div>
        </div>
        <div className=" md:hidden bg-primary ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block  py-2 rounded-md  text-base font-medium text-white hover:text-black hover:bg-white text-center "
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
