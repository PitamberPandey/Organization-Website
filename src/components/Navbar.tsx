import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from '../pages/logo3.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration- ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md shadow-gray-200 dark:shadow-gray-800'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigate('home')}
          >
            {/* Logo optional */}
            {/* <img src={Logo} alt="Pluto Logo" className="w-10 h-10 mr-3 object-contain" /> */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              PLUTO ASSOCIATIES
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Home
            </button>

            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 animate-fade-in">
                  <button
                    onClick={() => navigate('it-services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    IT Services
                  </button>
                  <button
                    onClick={() => navigate('law-services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Legal Services
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
            </button>

            <button
              onClick={() => navigate('publish')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'publish'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Publish
            </button>

            <button
              onClick={() => navigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => navigate('home')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate('it-services')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              IT Services
            </button>
            <button
              onClick={() => navigate('law-services')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Legal Services
            </button>
            <button
              onClick={() => navigate('about')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate('publish')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Publish
            </button>
            <button
              onClick={() => navigate('contact')}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
