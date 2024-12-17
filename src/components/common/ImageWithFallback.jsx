import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.jpg',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-[#36393f] animate-pulse" />
      )}
      <motion.img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;