import React from 'react';
import { motion } from 'framer-motion';

const PartnerCard = ({ partner }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#36393f] p-6 rounded-lg text-center"
    >
      <img 
        src={partner.logo} 
        alt={`${partner.name} Logo`}
        className="w-32 h-32 mx-auto mb-4 object-contain"
      />
      <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
      <p className="text-gray-300">{partner.description}</p>
    </motion.div>
  );
};

export default PartnerCard;