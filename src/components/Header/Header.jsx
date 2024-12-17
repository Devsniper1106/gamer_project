import React, { useState } from 'react';
import { mainNavLinks } from '../../constants/navigation';
import Logo from '../common/Logo';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo variant="main" />
          <NavMenu links={mainNavLinks} className="hidden md:flex" />
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} links={mainNavLinks} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;