// types/database.d.ts

export interface DbProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  features: string; // JSON string of string[]
  specifications: string; // JSON string of ProductSpecifications
  images: string; // JSON string of string[]
  category: string;
  tags: string; // JSON string of string[]
  createdAt: Date;
  updatedAt: Date;
}
