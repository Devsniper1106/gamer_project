import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#2f3136] text-white">
      <HeroBackground />
      <div className="container mx-auto px-4 py-32 relative">
        <HeroContent />
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;