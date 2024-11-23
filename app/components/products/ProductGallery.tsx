// components/products/ProductGallery.tsx
"use client";
import { useState } from "react";

interface ProductImage {
  id: string;
  url: string;
}

interface ProductGalleryProps {
  readonly images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImageId, setSelectedImageId] = useState(images[0]?.id || "");

  return (
    <div className="mb-8">
      <div className="relative aspect-video bg-gray-100 mb-4 rounded-lg overflow-hidden">
        {/* Main image placeholder - in real app, use next/image */}
        <div className="absolute inset-0 bg-gray-200" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            className={`aspect-video bg-gray-100 rounded-lg overflow-hidden ${
              selectedImageId === image.id ? "ring-2 ring-blue-600" : ""
            }`}
            onClick={() => setSelectedImageId(image.id)}
          >
            {/* Thumbnail placeholder - in real app, use next/image */}
            <div className="w-full h-full bg-gray-200" />
          </button>
        ))}
      </div>
    </div>
  );
}
