// components/products/ProductGallery.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductImage {
  id: string;
  url: string;
}

interface ProductGalleryProps {
  readonly images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImageId, setSelectedImageId] = useState(images[0]?.id || "");
  const [isLoading, setIsLoading] = useState(true);

  // Handle the click event inside the component
  const handleImageSelect = (imageId: string) => {
    setIsLoading(true);
    setSelectedImageId(imageId);
  };

  const selectedImage =
    images.find((img) => img.id === selectedImageId) || images[0];

  return (
    <div className="mb-8">
      <div className="relative aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden">
        {/* Main large image */}
        {selectedImage && (
          <Image
            src={selectedImage.url}
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
        {/* Main image placeholder - in real app, use next/image */}
        {/* <div className="absolute inset-0 bg-gray-200" /> */}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            className={`
            relative aspect-video rounded-lg overflow-hidden bg-gray-100
            ${selectedImageId === image.id ? "ring-2 ring-blue-600" : ""}
          `}
            onClick={() => handleImageSelect(image.id)}
          >
            <Image
              src={image.url}
              alt="Product thumbnail"
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
