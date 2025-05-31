"use client";

import { PortfolioCategory } from "@/types/portfolio.type";

interface FilterButtonsProps {
  categories: readonly PortfolioCategory[];
  activeCategory: PortfolioCategory;
  onSelect: (category: PortfolioCategory) => void;
}

export default function FilterButtons({
  categories,
  activeCategory,
  onSelect,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-navy-700 text-white"
              : "bg-white text-navy-700 hover:bg-navy-50 border border-navy-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
