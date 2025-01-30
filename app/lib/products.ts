// lib/products.ts
import { Product, ProductFilter } from "@/types/product";
import { mockProducts } from "@/mocks/products";
import fallbackData from "@/data/products.json";
// import {  } from "dns";

// Utility type for JSON data where dates are strings
type ProductFromJSON = Omit<Product, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

function validateAndParseDate(dateString: string): Date {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${dateString}`);
  }
  return date;
}

export async function getProducts(): Promise<Product[]> {
  if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
    return mockProducts;
  }

  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error(`API request failed: ${response.status}`);
    const data: { products: ProductFromJSON[] } = await response.json();

    return data.products.map((product) => ({
      ...product,
      createdAt: validateAndParseDate(product.createdAt),
      updatedAt: validateAndParseDate(product.updatedAt),
    }));
  } catch (error) {
    console.warn("Failed to fetch products, using fallback data:", error);
    const products: { products: ProductFromJSON[] } = fallbackData;

    return products.products.map((product) => ({
      ...product,
      createdAt: validateAndParseDate(product.createdAt),
      updatedAt: validateAndParseDate(product.updatedAt),
    }));
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
    return mockProducts.find((p) => p.slug === slug) || null;
  }

  try {
    const response = await fetch(`${API_URL}/products/${slug}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: { product: ProductFromJSON } = await response.json();
    return {
      ...data.product,
      createdAt: validateAndParseDate(data.product.createdAt),
      updatedAt: validateAndParseDate(data.product.updatedAt),
    };
  } catch (error) {
    console.warn(
      `Failed to fetch product with slug ${slug}, using fallback:`,
      error
    );
    const products: { products: ProductFromJSON[] } = fallbackData;
    const product = products.products.find((p) => p.slug === slug);
    if (!product) return null;

    return {
      ...product,
      createdAt: validateAndParseDate(product.createdAt),
      updatedAt: validateAndParseDate(product.updatedAt),
    };
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
    return mockProducts.slice(0, 10); // Just returns first 10 as featured
  }

  try {
    const response = await fetch(`${API_URL}/products/featured`);
    if (!response.ok) throw new Error(`API request failed: ${response.status}`);

    const data: { products: ProductFromJSON[] } = await response.json();
    return data.products.map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
    }));
  } catch (error) {
    console.warn("Failed to fetch featured products, using fallback:", error);
    const products: { products: ProductFromJSON[] } = fallbackData;
    return products.products.slice(0, 10).map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt),
      updatedAt: new Date(product.updatedAt),
    }));
  }
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
