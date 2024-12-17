import React from 'react';
import PageTitle from '../components/common/PageTitle';
import PartnerGrid from '../components/Partners/PartnerGrid';

const PartnersPage = () => {
  const partners = [
    // Add your partner data here
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <PageTitle 
        title="Our Partners"
        subtitle="Growing Together in Gaming"
      />
      <PartnerGrid partners={partners} />
    </div>
  );
}

export default PartnersPage;