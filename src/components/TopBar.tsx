import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-[#0b2c4d] text-white text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2 sm:gap-0">

        {/* Left: Phone & Email */}
        <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-1">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="truncate">+977 9748437611</span>
          </div>

          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span className="truncate">plutoassociates5@gmail.com</span>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61583562332372"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.instagram.com/plutoassociates?igsh=MXJ5cTk5NHI2cDJsdw=="
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://wa.me/9779748437611"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="https://www.tiktok.com/@plutoassociates"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition"
          >
            <FaTiktok size={20} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
