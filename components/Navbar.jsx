import React from "react";

const Navbar = () => {
  const links = [
    { label: 'Link 1', href: '/' },
    { label: 'Link 2', href: '/' },
    { label: 'Link 3', href: '/' },
    { label: 'Link 4', href: '/' },
  ];
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="font-bold text-xl">TRADE</h1>
            </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-gray-800 px-6 py-1 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-100">
              Sign Up
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
