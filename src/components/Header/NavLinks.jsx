import React from 'react';

const NavLinks = () => {
  const links = ['Home', 'Communities', 'Tournaments', 'About'];
  
  return (
    <nav>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-[#7289da] transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;