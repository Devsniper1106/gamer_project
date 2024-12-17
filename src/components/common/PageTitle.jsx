import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default PageTitle;