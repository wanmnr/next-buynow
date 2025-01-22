// prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import { products } from "@/data/products.json";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();

  // Seed products
  for (const product of products) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
        reviews: product.reviews,
        category: product.category,
        // Store arrays as JSON
        features: JSON.stringify(product.features),
        specifications: product.specifications, // Already an object
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
