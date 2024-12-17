import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center max-w-4xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#7289da] bg-clip-text text-transparent"
      >
        Welcome to <span className="text-[#7289da]">GamerHub</span>
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-xl md:text-2xl text-gray-300 mb-12"
      >
        Connect with gamers, join tournaments, and level up your gaming experience
      </motion.p>

      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button 
          size="lg"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10">Join Discord</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#7289da] to-[#5b6eae] transform transition-transform group-hover:scale-110" />
        </Button>

        <Button 
          variant="secondary"
          size="lg"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10">Browse Tournaments</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#36393f] to-[#2f3136] transform transition-transform group-hover:scale-110" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;