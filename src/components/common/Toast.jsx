import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
  warning: 'bg-yellow-500',
};

const Toast = ({ 
  message, 
  type = 'info', 
  duration = 3000, 
  onClose 
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`
          fixed
          bottom-4
          right-4
          px-6
          py-3
          rounded-lg
          text-white
          shadow-lg
          ${variants[type]}
        `}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;