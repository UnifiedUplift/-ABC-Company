import React, { useState } from 'react';
import '@/styles/navbar.css'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blur p-4 flex items-center justify-between relative">
      <div className="flex items-center">
        {/* <img src="https://placehold.co/40" alt="Logo" className="h-8 w-8 mr-2 rounded-full" /> */}
        <span className="text-primary-foreground text-lg font-bold tracking-wide">Your Brand</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-primary-foreground hover:text-primary transition duration-300 ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
      <button
        className="md:hidden text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-transparent md:hidden z-50">
          <div className="flex flex-col items-center space-y-4 p-4 bg-opacity-70 bg-black transition duration-300 ease-in-out">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-foreground transition duration-300 ease-in-out cursor-pointer"
                onClick={handleMenuItemClick}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
