import React from "react";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Blog", href: "/" },
  ];
  return (
    <nav className="bg-primary shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-bold text-xl light-gray-text hover:text-white">
              TRADE
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="light-gray-text hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
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
                className="block  py-2  text-base font-medium light-gray-text hover:text-white border-b "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
