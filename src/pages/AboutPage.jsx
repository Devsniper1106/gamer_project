import React from 'react';
import PageTitle from '../components/common/PageTitle';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Hero from '../components/Hero/Hero';
const AboutPage = () => {
  const missionPoints = [
    {
      title: "Community First",
      description: "Building a welcoming and inclusive environment for gamers of all skill levels",
      icon: "🤝"
    },
    {
      title: "Competitive Spirit",
      description: "Fostering healthy competition and growth through organized leagues and tournaments",
      icon: "🏆"
    },
    {
      title: "Player Development",
      description: "Supporting players in their journey from amateur to professional gaming",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* <Hero /> */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative  min-h-[800px] bg-discord-darker"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/banner-bg.jpg" 
            alt="OASIS Gaming Banner" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-discord-darker" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="/images/logo.png" 
                alt="OASIS Logo" 
                className="w-48 h-48 mx-auto"
              />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to OASIS
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* Mission Statement Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-300">
            OASIS is more than just a gaming community - we're a family of passionate
            gamers dedicated to creating competitive and inclusive environments for
            players of all skill levels. 
            Through our Esports Teams, Draft League, tournaments, and 6mans events, we aim to provide a platform where players can grow, compete, and connect.
          </p>
        </motion.div>

        {/* Mission Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Active Players", value: "1000+" },
            { label: "Tournaments", value: "50+" },
            { label: "Teams", value: "100+" },
            { label: "Community Members", value: "5000+" }
          ].map((stat, index) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-2xl font-bold text-discord-primary mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;