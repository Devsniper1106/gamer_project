import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const variants = {
  main: 'w-16',
  esports: 'w-8',
  draft: 'w-8'
};

const Logo = ({ variant = 'main' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${variants[variant]} h-auto`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img 
        src={`/images/logo.png`} 
        alt={`OASIS ${variant.charAt(0).toUpperCase() + variant.slice(1)} Logo`}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default Logo;