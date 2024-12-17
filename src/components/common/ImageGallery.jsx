import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="aspect-square rounded-lg overflow-hidden"
        >
          <ImageWithFallback
            src={image.url}
            alt={image.alt}
            className="hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;