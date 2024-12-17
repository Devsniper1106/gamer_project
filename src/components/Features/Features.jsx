import React from 'react';
import FeatureCard from './FeatureCard';
import { FaGamepad, FaTrophy, FaUsers, FaHeadset, FaChartLine, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: FaGamepad,
      title: "Gaming Communities",
      description: "Join like-minded gamers in our vibrant communities",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: FaTrophy,
      title: "Tournaments",
      description: "Compete in exciting tournaments with amazing prizes",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaUsers,
      title: "Team Finding",
      description: "Find the perfect teammates for your gaming sessions",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: FaHeadset,
      title: "Voice Chat",
      description: "Crystal clear voice chat for seamless communication",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaChartLine,
      title: "Skill Tracking",
      description: "Track your progress and improve your gameplay",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: FaDiscord,
      title: "Discord Integration",
      description: "Seamlessly connect with our Discord community",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="bg-[#2f3136] text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7289da]/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7289da] to-white bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to enhance your gaming experience in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;