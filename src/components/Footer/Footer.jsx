import React from 'react';
import { FaDiscord, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaDiscord, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: FaTwitch, url: '#' },
    { icon: FaYoutube, url: '#' }
  ];

  return (
    <footer className="relative bg-[#202225] text-white py-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#202225] opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">GamerHub</h3>
            <p className="text-gray-400">Connect. Play. Conquer.</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-2xl hover:text-[#7289da] transition-colors"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} GamerHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;