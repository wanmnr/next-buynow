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
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Bluetooth Version': '5.0',
      'Weight': '250g',
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
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5 ATM',
      'Compatibility': 'iOS and Android',
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