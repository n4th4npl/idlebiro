// FullImagePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { artData } from '../data/data';

const FullImagePage = () => {
  const location = useLocation();
  const { src } = location.state || { src: '/default-image.jpg' };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Using 'layoutId' for shared element transition between routes */}
      <motion.img
        src="/src/assets/brightside.jpg"
        alt="Full Width"
        className="w-full h-auto max-h-full"
        initial={{ scale: 1 }}
      />
    </div>
  );
};

export default FullImagePage;
