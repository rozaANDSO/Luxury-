'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioCategory, Project, CategoryInfo } from '@/types/portfolio.type';
import portfolioData from '@/constants/portfolio.data';
import { PORTFOLIO_CATEGORIES } from '@/constants/portfolio';

interface PortfolioGridProps {
  items?: Project[] | null;
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'all'>('all');
  const safeItems: Project[] = Array.isArray(items) ? items : portfolioData;

  const filteredItems: Project[] =
    activeCategory === 'all'
      ? safeItems.filter((item) => item.title !== 'Coming Soon')
      : safeItems.filter((item) => item.category === activeCategory).slice(0, 12);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setActiveCategory('all')}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-emerald-700 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>

        {PORTFOLIO_CATEGORIES.map((cat: CategoryInfo) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {cat.displayTitle}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
        {filteredItems.map((project) => {
          const image = project.images?.[0];

          return (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] relative">
                {image?.path ? (
                  <Image
                    src={image.path}                  
                    alt={image.title || project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                <p className="mt-2 text-xs text-gray-500">{project.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
