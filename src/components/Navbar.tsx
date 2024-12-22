import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/src/pages/featurespage' },
    { name: 'About', path: '/src/pages/AboutPage' },
    { name: 'Contact', path: '/src/pages//contactpage' }
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a
                  onClick={() => handleNavClick('/')}
                  className={`text-2xl font-bold cursor-pointer ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
              >
                Athlon
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navigationItems.map((item) => (
                    <a
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className={`${
                            isScrolled ? 'text-gray-800' : 'text-white'
                        } hover:text-blue-500 transition-colors duration-200 font-medium cursor-pointer
                  ${location.pathname === item.path ? 'text-blue-500' : ''}`}
                    >
                      {item.name}
                    </a>
                ))}

                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                        isScrolled ? 'text-gray-800' : 'text-white'
                    } hover:text-blue-500`}
                >
                  <Instagram size={20} />
                </a>

                <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium">
                  Join Us
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navigationItems.map((item) => (
                <a
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    className={`block px-3 py-2 text-gray-800 hover:text-blue-500 transition-colors duration-200 cursor-pointer
              ${location.pathname === item.path ? 'text-blue-500' : ''}`}
                >
                  {item.name}
                </a>
            ))}

            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-800 hover:text-blue-500"
            >
              <Instagram size={20} />
            </a>

            <button className="block w-full px-3 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
              Join Us
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;