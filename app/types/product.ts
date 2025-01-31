// types/product.ts

import { Prisma } from "@prisma/client";

export interface DbProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  category: string;
  features: Prisma.JsonValue;
  specifications: Prisma.JsonValue;
  images: Prisma.JsonValue;
  tags: Prisma.JsonValue;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecifications {
  brand: string;
  model: string;
  connectivity: string;
  weight: string;
  warranty: string;
  battery: string;
  display: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  category: string;
  features: string[];
  specifications: ProductSpecifications;
  images: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: "price" | "rating" | "newest";
  sortOrder?: "asc" | "desc";
}

// Type guard to check if a value matches ProductSpecifications
export function isProductSpecifications(
  value: unknown
): value is ProductSpecifications {
  const spec = value as ProductSpecifications;
  return (
    typeof spec === "object" &&
    spec !== null &&
    typeof spec.brand === "string" &&
    typeof spec.model === "string" &&
    typeof spec.connectivity === "string" &&
    typeof spec.weight === "string" &&
    typeof spec.warranty === "string" &&
    typeof spec.battery === "string" &&
    typeof spec.display === "string"
  );
}

// Conversion functions
export function dbProductToProduct(dbProduct: DbProduct): Product {
  return {
    ...dbProduct,
    features: Array.isArray(dbProduct.features)
      ? (dbProduct.features as string[])
      : [],
    specifications: isProductSpecifications(dbProduct.specifications)
      ? dbProduct.specifications
      : {
          brand: "",
          model: "",
          connectivity: "",
          weight: "",
          warranty: "",
          battery: "",
          display: "",
        },
    images: Array.isArray(dbProduct.images)
      ? (dbProduct.images as string[])
      : [],
    tags: Array.isArray(dbProduct.tags) ? (dbProduct.tags as string[]) : [],
  };
}

export function productToDbProduct(product: Product): DbProduct {
  return {
    ...product,
    features: product.features as unknown as Prisma.JsonValue,
    specifications: product.specifications as unknown as Prisma.JsonValue,
    images: product.images as unknown as Prisma.JsonValue,
    tags: product.tags as unknown as Prisma.JsonValue,
  };
}
