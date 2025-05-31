import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
      
              <span className="text-2xl font-bold">Luxury Portfolio</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-lg hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/portfolio" className="text-lg hover:text-gold transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-lg hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
