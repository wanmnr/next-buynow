// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import productData from "@/data/products.json";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();

  // Seed products
  for (const product of productData.products) {
    await prisma.product.create({
      data: {
        ...product,
        features: JSON.stringify(product.features),
        specifications: JSON.stringify(product.specifications),
        images: JSON.stringify(product.images),
        tags: JSON.stringify(product.tags),
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
      },
    });
  }

  console.log("Database has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
