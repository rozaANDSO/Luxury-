"use client";
import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative">
      <div className="relative aspect-video bg-navy-100 rounded-sm overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gold-500" : "bg-navy-300"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
