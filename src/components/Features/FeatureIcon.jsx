import React from 'react';
import { motion } from 'framer-motion';

const FeatureIcon = ({ Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`
        w-16 h-16 rounded-lg mb-6 flex items-center justify-center
        bg-gradient-to-br ${color}
      `}
    >
      <Icon className="text-3xl text-white" />
    </motion.div>
  );
};

export default FeatureIcon;