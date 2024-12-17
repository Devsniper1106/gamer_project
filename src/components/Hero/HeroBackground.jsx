import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <>
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/placeholder.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-discord-darker/80" />
      </div>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#7289da]/20 via-transparent to-transparent animate-pulse" />
      
      {/* Floating gaming icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🎮
        </motion.div>
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-6xl opacity-20"
        >
          🏆
        </motion.div>
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-6xl opacity-20"
        >
          🎯
        </motion.div>
      </div>
    </>
  );
};

export default HeroBackground;