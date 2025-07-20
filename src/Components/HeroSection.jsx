'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import appMockup from '../../public/mockup.jpg'; // ✅ make sure this file exists

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-32  bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/herosection-bg.png')"}}

    >
        <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8 bg-white/10 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse"></div>
            <span className="text-sm font-light tracking-wide text-white">
              AI-Powered Productivity Revolution
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl relative z-10 text-white md:text-7xl lg:text-8xl font-light flex flex-col tracking-tight gap-3 mb-3"
          >
            <span className="text-white">Beyond</span>
            <span className="text-white">Productivity</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 relative z-10"
          >
            Transform your workflow with AI-powered automation that learns, adapts, and evolves with your productivity needs. Experience the future of intelligent task management.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-20"
          >
            <button className="btn-premium text-lg px-7 py-3 inline-flex items-center rounded-full glass-card bg-white/10 backdrop-blur-md">
              Get Started
              <motion.span
                className="ml-3 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>

              {/* Mockup Container */}
              <div className="relative bg-white/10 backdrop-blur-xl p-4 rounded-3xl">
                <Image
                  src={appMockup}
                  alt="Nlovable App Interface"
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
