// lib/db/helpers.ts

import type { DbProduct } from "@/types/database";
import type { Product, ProductSpecifications } from "@/types/product";

/**
 * Converts a database product (DbProduct) to a regular product (Product) by parsing JSON strings
 * @param {DbProduct} dbProduct - The database product object with JSON string fields
 * @returns {Product} A product object with parsed arrays and objects
 * @throws {SyntaxError} Throws if JSON parsing fails for any field
 */
export function dbProductToProduct(dbProduct: DbProduct): Product {
  return {
    ...dbProduct,
    features: JSON.parse(dbProduct.features) as string[],
    specifications: JSON.parse(
      dbProduct.specifications
    ) as ProductSpecifications,
    images: JSON.parse(dbProduct.images) as string[],
    tags: JSON.parse(dbProduct.tags) as string[],
  };
}

/**
 * Converts a regular product (Product) to a database product (DbProduct) by stringifying arrays and objects
 * @param {Product} product - The product object with arrays and objects
 * @returns {DbProduct} A database product object with JSON stringified fields
 */
export function productToDbProduct(product: Product): DbProduct {
  return {
    ...product,
    features: JSON.stringify(product.features),
    specifications: JSON.stringify(product.specifications),
    images: JSON.stringify(product.images),
    tags: JSON.stringify(product.tags),
  };
}

/**
 * Formats a product by ensuring all fields are in their correct format
 * Handles both string (JSON) and parsed array/object formats
 * @param {Product} product - The product to format
 * @returns {Product} A formatted product with consistent data types
 * @throws {SyntaxError} Throws if JSON parsing fails for string fields
 */
export function formatProduct(product: Product): Product {
  return {
    ...product,
    features: Array.isArray(product.features)
      ? product.features
      : (JSON.parse(product.features as string) as string[]),
    images: Array.isArray(product.images)
      ? product.images
      : (JSON.parse(product.images as string) as string[]),
    tags: Array.isArray(product.tags)
      ? product.tags
      : (JSON.parse(product.tags as string) as string[]),
    specifications:
      typeof product.specifications === "string"
        ? (JSON.parse(product.specifications) as ProductSpecifications)
        : product.specifications,
  };
}

// import { Prisma, PrismaClient } from '@prisma/client';
// import type { Product } from '@/types/product';

// type PrismaProduct = Prisma.ProductGetPayload<{}>;

// export function formatProduct(dbProduct: PrismaProduct): Product {
//   return {
//     ...dbProduct,
//     features: JSON.parse(dbProduct.features as string),
//     images: JSON.parse(dbProduct.images as string),
//     tags: JSON.parse(dbProduct.tags as string),
//     specifications: dbProduct.specifications,
//   };
// }

// export function prepareProductForDb(
//   product: Product
// ): Omit<PrismaProduct, 'createdAt' | 'updatedAt' | 'CartItem'> {
//   return {
//     ...product,
//     features: JSON.stringify(product.features),
//     images: JSON.stringify(product.images),
//     tags: JSON.stringify(product.tags),
//     specifications: product.specifications,
//   };
// }
