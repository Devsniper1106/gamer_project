import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TierCard = ({ tier, stats }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#36393f] rounded-lg overflow-hidden shadow-lg"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-4">{tier.name} Tier</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <p className="font-semibold">Teams</p>
            <p>{stats.teamCount}</p>
          </div>
          <div>
            <p className="font-semibold">Players</p>
            <p>{stats.playerCount}</p>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <Link 
            to={`${tier.path}/schedule`}
            className="block text-center py-2 px-4 bg-[#7289da] hover:bg-[#5b6eae] rounded transition-colors"
          >
            View Schedule
          </Link>
          <Link 
            to={`${tier.path}/standings`}
            className="block text-center py-2 px-4 bg-[#36393f] hover:bg-[#2f3136] border border-[#7289da] rounded transition-colors"
          >
            View Standings
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TierCard;