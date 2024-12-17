import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#36393f] p-8 rounded-xl shadow-lg relative overflow-hidden group"
    >
      {/* Gradient background that shows on hover */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
        bg-gradient-to-br ${color}
      `} />

      <div className="relative z-10">
        <div className={`
          w-16 h-16 rounded-lg mb-6 flex items-center justify-center
          bg-gradient-to-br ${color}
        `}>
          <Icon className="text-3xl text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#7289da] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;