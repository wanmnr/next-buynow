// src/lib/db/client.ts

import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma





// import { db } from './lib/db';
// import { formatProduct, prepareProductForDb } from './lib/db/helpers';
// import type { Product } from '@/types/product';

// async function getProduct(slug: string): Promise<Product | null> {
//   const product = await db.product.findUnique({
//     where: { slug },
//   });
  
//   if (!product) return null;
  
//   return formatProduct(product);
// }

// async function createProduct(product: Product) {
//   const dbProduct = prepareProductForDb(product);
  
//   return await db.product.create({
//     data: dbProduct,
//   });
// }