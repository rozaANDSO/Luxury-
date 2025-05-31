'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/portfolio.type';

export default function ProjectDetailClient({ project }: { project: Project }) {
  const formatCategory = (category: string): string =>
    category
      .split('-')
      .map(segment => segment[0].toUpperCase() + segment.slice(1))
      .join(' ');

  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center text-gold-400 hover:text-gold-300"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Title + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">{project.description}</p>
        </motion.div>

        {/* Project Details */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Client', value: project.client },
            { label: 'Category', value: formatCategory(project.category) },
            { label: 'Year', value: project.date },
          ].map((detail, i) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (i + 1), duration: 0.8 }}
              className="rounded-lg bg-white/5 p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-gold-400">{detail.label}</h3>
              <p className="text-gray-300">{detail.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Images */}
        <div className="grid gap-8 md:grid-cols-2">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={image.path}
                alt={image.title || `${project.title} Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
