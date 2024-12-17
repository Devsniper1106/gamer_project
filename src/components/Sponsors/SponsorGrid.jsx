import React from 'react';
import SponsorCard from './SponsorCard';

const SponsorGrid = ({ sponsors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  );
};

export default SponsorGrid;