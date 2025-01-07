// mocks/reviews.ts
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  title: string
  content: string
  createdAt: Date
}

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: 'user1',
    userName: 'Ahmad Ismail',
    rating: 5,
    title: 'Best lah, worth every ringgit!',
    content: 'Memang puas hati dengan headphone ni. Noise cancellation dia power, sound quality crystal clear. Senang nak bawa travel. Recommended untuk yang suka dengar lagu masa kerja.',
    createdAt: new Date('2024-01-15T00:00:00.000Z'),
  },
  {
    id: '2',
    productId: '1',
    userId: 'user2',
    userName: 'Sarah Tan',
    rating: 4,
    title: 'Good quality but quite mahal',
    content: 'The sound quality is superb but price quite expensive la. But battery life very good, can last few days. Packaging came in good condition, fast delivery also.',
    createdAt: new Date('2024-01-16T00:00:00.000Z'),
  },
  {
    id: '3',
    productId: '1',
    userId: 'user3',
    userName: 'Raj Kumar',
    rating: 5,
    title: 'Terbaik! Premium quality',
    content: 'Beli masa sale 12.12, dapat harga yang berbaloi. Build quality mantap, sound clarity tiptop. Bluetooth connection stable, tak ada delay. Customer service also very helpful.',
    createdAt: new Date('2024-01-17T00:00:00.000Z'),
  }
]