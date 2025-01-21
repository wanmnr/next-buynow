// types/product.ts
// export interface Product {
//     id: string;
//     slug: string;
//     name: string;
//     description: string;
//     price: number;
//     images: string[];
//     features: string[];
//     specifications: Record<string, string>;
//     category: string;
//     isFeatured: boolean;
//     stock: number;
//   }

// types/product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
  specifications: ProductSpecifications;
  images: string[];
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecifications {
  brand: string;
  model: string;
  connectivity?: string;
  weight?: string;
  warranty: string;
  battery?: string;
  display?: string;
}

// dictionary data structure
// interface Specification {
//   key: string;
//   value: string | number | boolean;
// }

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  sortBy?: "price" | "rating" | "newest";
  sortOrder?: "asc" | "desc";
}
