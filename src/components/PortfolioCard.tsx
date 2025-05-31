"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/portfolio.type";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group">
      <div className="relative overflow-hidden rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl">
        {project.images[0] && (
          <div className="aspect-[4/3] relative">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-playfair font-semibold mb-2">
            {project.title}
          </h3>
          <span className="inline-block bg-navy-100 text-navy-800 text-xs px-2 py-1 rounded-sm">
            {project.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
