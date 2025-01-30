// components/products/ProductGallery.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  readonly images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageSelect = (index: number) => {
    setIsLoading(true);
    setSelectedImageIndex(index);
  };

  const selectedImage = images[selectedImageIndex];

  return (
    <div className="mb-8">
      <div className="relative aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Product image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className={`
              object-cover
              transition-opacity duration-300
              ${isLoading ? "opacity-0" : "opacity-100"}
            `}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`
              relative aspect-video rounded-lg overflow-hidden bg-gray-100
              ${selectedImageIndex === index ? "ring-2 ring-blue-600" : ""}
            `}
            onClick={() => handleImageSelect(index)}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, 20vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}