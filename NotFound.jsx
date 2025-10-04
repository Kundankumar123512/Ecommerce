import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
  // Detect screen size
  const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="text-center max-w-lg">
        {/* Animated Illustration */}
        <motion.img
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
          alt="Page Not Found"
          className="mx-auto w-96 h-96 sm:w-72 sm:h-52 md:w-96 md:h-64 drop-shadow-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        />


        {/* Glowing 404 */}
        <motion.h1
          className="mt-6 text-7xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="mt-4 text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link
            to={isMobile ? "/hero" : "/about"} // mobile -> Hero, desktop -> About
            className="flex items-center gap-3 px-8 py-3 rounded-full 
                       bg-yellow-400 text-black font-semibold text-lg shadow-lg 
                       hover:scale-105 hover:bg-yellow-500 hover:shadow-yellow-400/50 
                       transition-all duration-300"
          >
            <FaHome className="text-2xl" />
            <span>Go Back Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
