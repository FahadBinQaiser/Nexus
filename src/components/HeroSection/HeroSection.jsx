import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm text-white/80">🚀 Now in Beta - Join 10,000+ Early Users</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
          Build the Future
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent block">
            Today
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the next generation of digital solutions. Powerful, intuitive, and designed for teams who want to make an impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
            <span>Watch Demo</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </button>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}