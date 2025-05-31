import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Luxury Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
