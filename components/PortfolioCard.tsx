import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, category }) => {
  const getImagePath = (category: string) => {
    // Return placeholder image path based on category
    return `/portfolio/${category}/${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  };

  return (
    <Link href={`/portfolio/${category}/${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative group">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <Image
            src={getImagePath(category)}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-end p-4">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
