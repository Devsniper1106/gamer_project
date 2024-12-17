import React from 'react';
import PageTitle from '../components/common/PageTitle';
import { draftLeagueTiers } from '../constants/navigation';
import TierGrid from '../components/DraftLeague/TierGrid';

const DraftLeaguePage = () => {
  const seasonStats = {
    air: { teamCount: 8, playerCount: 24 },
    earth: { teamCount: 8, playerCount: 24 },
    fire: { teamCount: 8, playerCount: 24 },
    water: { teamCount: 8, playerCount: 24 }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <PageTitle 
        title="OASIS Draft League"
        subtitle="Season 1 - Where Legends Begin"
      />
      <TierGrid tiers={draftLeagueTiers} stats={seasonStats} />
    </div>
  );
}

export default DraftLeaguePage;