import Image from 'next/image';
import { FC } from 'react';

interface ImageItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGridProps {
  images: ImageItem[];
  category: string;
}

const ImageGrid: FC<ImageGridProps> = ({ images, category }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid; 