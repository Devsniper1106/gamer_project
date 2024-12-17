import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: "Active Players", value: "1000+", icon: "👥" },
  { label: "Tournaments", value: "50+", icon: "🏆" },
  { label: "Prize Pool", value: "$10K+", icon: "💰" },
  { label: "Communities", value: "100+", icon: "🌐" }
];

const HeroStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-24"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.2 }}
          className="text-center"
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold text-[#7289da] mb-2">{stat.value}</div>
          <div className="text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;