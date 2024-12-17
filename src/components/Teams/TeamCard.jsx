import React from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ team }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-[#36393f] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-4">
        <img 
          src={team.logo} 
          alt={`${team.name} Logo`}
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h3 className="text-xl font-bold text-white text-center mb-2">{team.name}</h3>
        <div className="space-y-2">
          {team.roster.map((player, index) => (
            <div key={index} className="text-gray-300 text-center">
              {player.name} - {player.role}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;