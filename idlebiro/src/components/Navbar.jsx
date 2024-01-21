import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarTitle = useAnimation();
  const navbarLinks = useAnimation();

  useEffect(() => {
    navbarTitle.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.1 },
    });
    navbarLinks.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.1 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <motion.div initial={{ opacity: 0, y: -80 }} animate={navbarTitle}>
        <h3 className="font-semibold text-4xl mb-4">The Idle Biro</h3>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: 80 }}
        animate={navbarLinks}
      >
        <ul className="flex items-center gap-12">
          <li>
            <a className="text-gray-500 hover:text-gray-950 transition" href="">
              Home
            </a>
          </li>
          <div className="h-[16px] w-[1px] bg-gray-300"></div>
          <li>
            <Link
              className="text-gray-500 hover:text-gray-950 transition"
              to="/shop"
            >
              Shop
            </Link>
          </li>
          <div className="h-[16px] w-[1px] bg-gray-300"></div>
          <li>
            <a className="text-gray-500 hover:text-gray-950 transition" href="">
              The Artist
            </a>
          </li>
          <div className="h-[16px] w-[1px] bg-gray-300"></div>
          <li>
            <a className="text-gray-500 hover:text-gray-950 transition" href="">
              Personalised Portaits
            </a>
          </li>
          <div className="h-[16px] w-[1px] bg-gray-300"></div>
          <li>
            <a className="text-gray-500 hover:text-gray-950 transition" href="">
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
