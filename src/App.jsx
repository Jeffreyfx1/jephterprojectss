import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      {/* Logo */}
      <a href="https://ibb.co/sd9gYjZZ">
        <img
          src="https://i.ibb.co/sd9gYjZZ/logo.png"
          alt="logo"
          border="0"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg mb-6"
        />
      </a>

      {/* Name + Code Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-2">
          Jephter Projects <span className="text-white">&lt;/&gt;</span>
        </h1>
        <p className="text-gray-300 text-lg mt-2">
          Innovative web projects built with code, passion & precision.
        </p>
      </motion.div>

      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-14 w-full max-w-3xl"
      >
        <a
          href="https://ai-fq7z.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
        >
          <a href="https://ibb.co/BVWMWyND">
            <img
              src="https://i.ibb.co/BVWMWyND/Screenshot-20250711-231407.png"
              alt="Screenshot-20250711-231407"
              border="0"
              className="w-full h-48 object-contain mb-4 rounded"
            />
          </a>
          <h2 className="text-2xl font-semibold text-yellow-300">AI Essay Generator</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Instantly generate high-quality essays with just a topic. Powered by AI, built with efficiency.
          </p>
        </a>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-white mb-3">Let’s connect & collaborate</p>
        <a
          href="https://whatsapp.com/channel/0029VbAxkJl0lwgqAOojKI3R"
          target="_blank"
          className="inline-block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition"
        >
          Join My WhatsApp Channel
        </a>
      </motion.div>
    </div>
  );
};

export default App;
