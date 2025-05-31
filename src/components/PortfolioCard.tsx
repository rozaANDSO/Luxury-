'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/portfolio.type';

export default function PortfolioCard({ project }: { project: Project }) {
  // Determine image src: first project image path or fallback placeholder by category
  const imageSrc =
    project.images?.[0]?.path ||
    `/portfolio/placeholders/${project.category || 'default'}.jpg`; // fallback based on category

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
        <div className="relative aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-playfair font-semibold text-gray-900">
            {project.title}
          </h3>
          <span className="inline-block rounded-sm bg-navy-100 px-2 py-1 text-xs text-navy-800">
            {project.category.replace(/-/g, ' ')}
          </span>
        </div>
      </div>
    </Link>
  );
}
