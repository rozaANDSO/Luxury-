
'use client';


import { motion } from "framer-motion";
import React from 'react';

import PortfolioGrid from '@/components/PortfolioGrid';
import portfolioProjects from '@/constants/projects';  // default export array of Project[]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Portfolio Header */}
      <div className="container mx-auto mb-16 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl"
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg text-gray-300"
        >
          Discover our collection of exceptional digital projects — showcasing our expertise in
          social media marketing, video editing, graphic design, paid advertising, and consulting.
        </motion.p>
      </div>

      {/* Portfolio Grid */}
      <div className="container mx-auto px-4">
        <PortfolioGrid items={portfolioProjects} />
      </div>
    </main>
  );
}
