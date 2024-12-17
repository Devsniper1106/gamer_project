import React from 'react';
import PartnerCard from './PartnerCard';

const PartnerGrid = ({ partners }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </div>
  );
};

export default PartnerGrid;