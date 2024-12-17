import React from 'react';
import PageTitle from '../components/common/PageTitle';
import SponsorGrid from '../components/Sponsors/SponsorGrid';

const SponsorsPage = () => {
  const sponsors = [
    // Add your sponsor data here
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <PageTitle 
        title="Our Sponsors"
        subtitle="Exclusive Deals for OASIS Members"
      />
      <SponsorGrid sponsors={sponsors} />
    </div>
  );
}

export default SponsorsPage;