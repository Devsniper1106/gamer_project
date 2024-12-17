import React from 'react';
import PageTitle from '../components/common/PageTitle';
import TeamGrid from '../components/Teams/TeamGrid';
import { motion } from 'framer-motion';

const EsportsPage = () => {
  const teams = [
    // Add your team data here
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <PageTitle 
        title="OASIS ESPORTS"
        subtitle="Home of Professional Rocket League Teams"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Rocket League Division</h2>
        <TeamGrid teams={teams} />
      </motion.div>
    </div>
  );
}

export default EsportsPage;