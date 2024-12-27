// lib/products.ts
import { Product, ProductFilter } from "@/types/product";
import { mockProducts } from "@/mocks/products";
import fallbackData from "@/data/products.json";
// import {  } from "dns";

// Utility type for JSON data where dates are strings
type ProductFromJSON = Omit<Product, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};


// export async function getProducts(): Promise<Product[]> {
//   // Use mock data if NEXT_PUBLIC_USE_MOCK_DATA is true
//   if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
//     return mockProducts;
//   }

//   try {
//     const response = await fetch("your-api-endpoint/products");
//     if (!response.ok) throw new Error("API request failed");
//     return response.json();
//   } catch (error) {
//     console.warn("Failed to fetch products, using fallback data:", error);
//     return fallbackData.products;
//   }
// }

export async function getProducts(): Promise<Product[]> {
  if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
    return mockProducts;
  }

  try {
    const response = await fetch("your-api-endpoint/products");
    if (!response.ok) throw new Error("API request failed");
    const data: { products: ProductFromJSON[] } = await response.json();
    
    return data.products.map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
    }));
  } catch (error) {
    console.warn("Failed to fetch products, using fallback data:", error);
    const products: { products: ProductFromJSON[] } = fallbackData;
    
    return products.products.map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
    }));
  }
}

// OLD

export async function getFeaturedProducts(): Promise<Product[]> {
  // In a real app, this would fetch from an API
  return mockProducts.slice(0, 10);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  // In a real app, this would fetch from an API
  return mockProducts.find((p) => p.slug === slug) || null;
}

export async function getFilteredProducts(
  filter: ProductFilter
): Promise<Product[]> {
  let filteredProducts = [...mockProducts];

  if (filter.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === filter.category
    );
  }

  if (filter.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= filter.minPrice!
    );
  }

  if (filter.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= filter.maxPrice!
    );
  }

  if (filter.inStock !== undefined) {
    filteredProducts = filteredProducts.filter(
      (p) => p.stock > 0 === filter.inStock
    );
  }

  if (filter.sortBy) {
    filteredProducts.sort((a, b) => {
      const order = filter.sortOrder === "desc" ? -1 : 1;
      switch (filter.sortBy) {
        case "price":
          return (a.price - b.price) * order;
        case "rating":
          return (a.rating - b.rating) * order;
        case "newest":
          return (a.createdAt.getTime() - b.createdAt.getTime()) * order;
        default:
          return 0;
      }
    });
  }

  return filteredProducts;
}
