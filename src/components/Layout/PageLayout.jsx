import React from 'react';
import { motion } from 'framer-motion';

const PageLayout = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`
        container
        mx-auto
        px-4
        py-24
        min-h-screen
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;