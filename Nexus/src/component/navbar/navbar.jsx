import React from 'react';
import { Menu, X, Zap } from 'lucide-react'; 

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">Nexus</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20">
          <div className="px-4 py-6 space-y-4">
            <a href="#benefits" className="block text-white/80 hover:text-white transition-colors">Benefits</a>
            <a href="#features" className="block text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="block text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="block text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
  