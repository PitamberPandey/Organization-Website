import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const navigate = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              PlutoAssocites
            </h3>
            <p className="text-sm text-gray-400">
              Your trusted partner for comprehensive IT and legal solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583562332372"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Facebook className="w-10 h-10" />
              </a>

              <a
                href="https://www.instagram.com/plutoassociates?igsh=MXJ5cTk5NHI2cDJsdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <Instagram className="w-10 h-10" />
              </a>

  <a
  href="https://www.tiktok.com/@plutoassociates"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-pink-400 transition"
>
  <FaTiktok className="w-10 h-10 " />
</a>

            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('contact')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('it-services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  IT Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('law-services')}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Legal Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>plutoassociates5@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>9845769570</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Kathmandu,maitighar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PlutoAssicaties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
