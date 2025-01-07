// mocks/products.ts
import { Product } from '../types/product'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    slug: 'wireless-headphones',
    description: 'High-quality wireless headphones with noise cancellation technology.',
    price: 199.99,
    stock: 50,
    rating: 4.5,
    reviews: 128,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
    ],
    specifications: {
      brand: 'AudioTech',
      model: 'WH-2000',
      connectivity: 'Bluetooth 5.0',
      weight: '250g',
      warranty: '1 year',
      battery: '30 hours',
      display: 'LED indicators'
    },
    images: [
      '/images/products/headphones-1.jpg',
      '/images/products/headphones-2.jpg',
      '/images/products/headphones-3.jpg',
    ],
    category: 'electronics',
    tags: ['headphones', 'wireless', 'audio'],
    createdAt: new Date('2024-01-01T00:00:00.000Z'),
    updatedAt: new Date('2024-01-01T00:00:00.000Z'),
  },
  {
    id: '2',
    name: 'Smart Watch',
    slug: 'smart-watch',
    description: 'Feature-packed smartwatch with health monitoring capabilities.',
    price: 299.99,
    stock: 30,
    rating: 4.7,
    reviews: 95,
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      'Sleep tracking',
    ],
    specifications: {
      brand: 'TechWatch',
      model: 'SW-100',
      connectivity: 'Bluetooth 5.0',
      weight: '45g',
      warranty: '2 years',
      battery: '7 days',
      display: '1.4" AMOLED'
    },
    images: [
      '/images/products/watch-1.jpg',
      '/images/products/watch-2.jpg',
      '/images/products/watch-3.jpg',
    ],
    category: 'electronics',
    tags: ['smartwatch', 'wearable', 'fitness'],
    createdAt: new Date('2024-01-02T00:00:00.000Z'),
    updatedAt: new Date('2024-01-02T00:00:00.000Z'),
  },
]