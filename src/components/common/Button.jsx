import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-[#7289da] hover:bg-[#5b6eae]',
  secondary: 'bg-[#36393f] hover:bg-[#2f3136] border border-[#7289da]',
  danger: 'bg-red-500 hover:bg-red-600',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-md
        font-medium
        text-white
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[#7289da]
        focus:ring-opacity-50
        transform
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;