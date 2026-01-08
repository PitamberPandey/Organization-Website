import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const closeMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            PLUTO ASSOCIATES
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={isActive('/')} onClick={closeMenus}>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => {
                  setServicesOpen(false);
                }, 200);
              }}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full pt-2 w-52 rounded-lg bg-white dark:bg-gray-800 shadow-lg py-2">
                  <DropdownLink to="/it-services" onClick={closeMenus}>
                    IT Services
                  </DropdownLink>
                  <DropdownLink to="/law-services" onClick={closeMenus}>
                    Legal Services
                  </DropdownLink>
                </div>
              )}
            </div>

            <NavLink to="/about" active={isActive('/about')} onClick={closeMenus}>
              About
            </NavLink>
            <NavLink to="/publish" active={location.pathname.startsWith('/publish')} onClick={closeMenus}>
              Publish
            </NavLink>
            <NavLink to="/contact" active={isActive('/contact')} onClick={closeMenus}>
              Contact
            </NavLink>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <MobileLink to="/" onClick={closeMenus}>Home</MobileLink>
          <MobileLink to="/it-services" onClick={closeMenus}>IT Services</MobileLink>
          <MobileLink to="/law-services" onClick={closeMenus}>Legal Services</MobileLink>
          <MobileLink to="/about" onClick={closeMenus}>About</MobileLink>
          <MobileLink to="/publish" onClick={closeMenus}>Publish</MobileLink>
          <MobileLink to="/contact" onClick={closeMenus}>Contact</MobileLink>
        </div>
      )}
    </nav>
  );
}

/* ---------------- Components ---------------- */

function NavLink({
  to,
  active,
  children,
  onClick,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors ${
        active
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  );
}

function DropdownLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {children}
    </Link>
  );
}
