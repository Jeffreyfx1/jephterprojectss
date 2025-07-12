import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white leading-tight"
      >
        Innovative <span className="text-yellow-400">Projects</span>
        <br />
        That Make a <span className="text-yellow-400">Difference</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-lg mt-4 max-w-xl"
      >
        Explore powerful and purpose-driven solutions built by Jephter. Beautiful, fast, and impactful.
      </motion.p>

      <motion.a
        href="https://whatsapp.com/channel/0029VbAxkJl0lwgqAOojKI3R"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
      >
        <FaWhatsapp className="text-xl" />
        Join My WhatsApp Channel
      </motion.a>
    </section>
  );
};

export default Hero;
