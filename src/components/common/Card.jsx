import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  const MotionComponent = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 300 }
  } : {};

  return (
    <MotionComponent
      {...hoverProps}
      className={`
        bg-[#36393f]
        rounded-lg
        shadow-lg
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </MotionComponent>
  );
};

export default Card;