import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ links, className = '' }) => {
  return (
    <nav className={className}>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              to={link.path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;