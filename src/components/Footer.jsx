import React from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 bg-black border-t border-white/10 text-white text-center py-8">
      <p className="text-sm text-gray-400 mb-3">
        &copy; {new Date().getFullYear()} Jephter Projects. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6 text-xl">
        <a
          href="https://github.com/JeffreyFx1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://whatsapp.com/channel/0029VbAxkJl0lwgqAOojKI3R"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
