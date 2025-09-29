import React, { useState } from 'react';
import { Menu, X, Church } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-full">
              <Church className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shining Light</h1>
              <p className="text-sm text-gray-600">Family Church</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#ministries" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
              Ministries
            </a>
            <a href="#events" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
              Events
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
              Give Online
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-purple-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#ministries" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                Ministries
              </a>
              <a href="#events" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                Events
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                Contact
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 mt-4">
                Give Online
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;