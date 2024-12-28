// app/config/products.ts
export const productConfig = {
    currency: 'USD',
    shipping: {
      free: 50, // Free shipping threshold
      standard: 5.99,
      express: 14.99
    },
    tax: 0.08, // 8% tax rate
    categories: [
      'Electronics',
      'Clothing',
      'Home & Garden',
      'Books',
      'Sports & Outdoors'
    ],
    filters: {
      price: {
        min: 0,
        max: 1000,
        step: 10
      },
      sort: [
        { label: 'Price: Low to High', value: 'price_asc' },
        { label: 'Price: High to Low', value: 'price_desc' },
        { label: 'Newest First', value: 'date_desc' },
        { label: 'Popular', value: 'popular' }
      ]
    }
  }