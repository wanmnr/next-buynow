// lib/db/index.js

import { prisma } from "./client";
import {
  Product,
  DbProduct,
  dbProductToProduct,
  productToDbProduct,
} from "@/types/product";
import productData from "@/data/products.json";
import { mockProducts } from "@/mocks/products";

type DataSource = "prisma" | "json" | "mock";

export class Database {
  private static instance: Database;
  private currentSource: DataSource = "prisma";

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private formatProduct(product: Record<string, unknown>): Product {
    const dbProduct: DbProduct = {
      ...product,
      features:
        typeof product.features === "string"
          ? JSON.parse(product.features)
          : product.features,
      specifications:
        typeof product.specifications === "string"
          ? JSON.parse(product.specifications)
          : product.specifications,
      images:
        typeof product.images === "string"
          ? JSON.parse(product.images)
          : product.images,
      tags:
        typeof product.tags === "string"
          ? JSON.parse(product.tags)
          : product.tags,
      createdAt: new Date(
        typeof product.createdAt === "string" ||
        typeof product.createdAt === "number"
          ? product.createdAt
          : Date.now()
      ),
      updatedAt: new Date(
        typeof product.updatedAt === "string" ||
        typeof product.updatedAt === "number"
          ? product.updatedAt
          : Date.now()
      ),
    } as DbProduct;

    return dbProductToProduct(dbProduct);
  }

  async getProducts(): Promise<Product[]> {
    try {
      if (this.currentSource === "prisma") {
        const products = await prisma.product.findMany();
        return products.map(this.formatProduct);
      }
    } catch (error) {
      console.error("Prisma error:", error);
      this.currentSource = "json";
    }

    if (this.currentSource === "json") {
      try {
        return productData.products.map(this.formatProduct);
      } catch (error) {
        console.error("JSON data error:", error);
        this.currentSource = "mock";
      }
    }

    return mockProducts;
  }

  async createProduct(data: Omit<Product, "id" | "createdAt" | "updatedAt">) {
    try {
      if (this.currentSource === "prisma") {
        const dbData = productToDbProduct({
          ...data,
          id: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        const prismaData = {
          ...dbData,
          features: JSON.stringify(dbData.features),
          specifications: JSON.stringify(dbData.specifications),
          images: JSON.stringify(dbData.images),
          tags: JSON.stringify(dbData.tags),
        };

        const result = await prisma.product.create({ data: prismaData });
        return dbProductToProduct(result as DbProduct);
      }
    } catch (error) {
      console.error("Failed to create product:", error);
      throw error;
    }
  }

  // Add other database operations here
}

export const db = Database.getInstance();
