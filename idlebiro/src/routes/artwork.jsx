import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Artwork = ({ src }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to the route with the image source in the state
      navigate('/image', { state: { src } });
    };

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="group relative">
          {/* Using 'layoutId' for shared element transition between routes */}
          <motion.div
            initial={{ scale: 1 }}
            whileTap={{ scale: 1.1 }}
            onClick={handleClick}
            className="cursor-pointer"
          >
            <img height={624} width={824} src="/src/assets/brightside.jpg" alt="Zoom" />
          </motion.div>
          <div className="flex justify-between">
            <h3 className="font-bold text-xl tracking-wide">THE OTHER SIDE</h3>
            <h3 className="font-bold text-xl tracking-wide">LIMITED RELEASE</h3>
          </div>
        </div>
      </div>
    );
};

export default Artwork;
