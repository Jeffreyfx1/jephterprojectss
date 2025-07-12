import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-xl font-bold">
          <span className="text-yellow-400 text-2xl">&lt;/&gt;</span>
          <span>Jephter Projects</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 px-4 pt-4 pb-2 space-y-2 text-sm font-medium">
          <li><a href="#projects" className="block hover:text-yellow-400">Projects</a></li>
          <li><a href="#faq" className="block hover:text-yellow-400">FAQ</a></li>
          <li><a href="#contact" className="block hover:text-yellow-400">Contact</a></li>
        </ul>
