import React from 'react';
import { motion } from 'framer-motion';

const SponsorCard = ({ sponsor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#36393f] p-6 rounded-lg text-center"
    >
      <img 
        src={sponsor.logo} 
        alt={`${sponsor.name} Logo`}
        className="w-32 h-32 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
      <p className="text-gray-300 mb-4">{sponsor.description}</p>
      <div className="bg-[#7289da] text-white py-2 px-4 rounded">
        Use code: <span className="font-bold">{sponsor.couponCode}</span>
      </div>
    </motion.div>
  );
};

export default SponsorCard;