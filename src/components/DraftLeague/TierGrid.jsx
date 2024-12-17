import React from 'react';
import TierCard from './TierCard';

const TierGrid = ({ tiers, stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {tiers.map((tier) => (
        <TierCard 
          key={tier.name} 
          tier={tier} 
          stats={stats[tier.name.toLowerCase()]} 
        />
      ))}
    </div>
  );
};

export default TierGrid;