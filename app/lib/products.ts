// lib/products.ts
import { mockProducts } from '../mocks/products'
import { Product, ProductFilter } from '../types/product'

export async function getFeaturedProducts(): Promise<Product[]> {
  // In a real app, this would fetch from an API
  return mockProducts.slice(0, 10)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  // In a real app, this would fetch from an API
  return mockProducts.find(p => p.slug === slug) || null
}

export async function getFilteredProducts(filter: ProductFilter): Promise<Product[]> {
  let filteredProducts = [...mockProducts]

  if (filter.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filter.category)
  }

  if (filter.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.price >= filter.minPrice!)
  }

  if (filter.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(p => p.price <= filter.maxPrice!)
  }

  if (filter.inStock !== undefined) {
    filteredProducts = filteredProducts.filter(p => (p.stock > 0) === filter.inStock)
  }

  if (filter.sortBy) {
    filteredProducts.sort((a, b) => {
      const order = filter.sortOrder === 'desc' ? -1 : 1
      switch (filter.sortBy) {
        case 'price':
          return (a.price - b.price) * order
        case 'rating':
          return (a.rating - b.rating) * order
        case 'newest':
          return (a.createdAt.getTime() - b.createdAt.getTime()) * order
        default:
          return 0
      }
    })
  }

  return filteredProducts
}