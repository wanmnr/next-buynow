// components/home/FeaturedProducts.tsx
import ProductGrid from "../products/ProductGrid";
import { getFeaturedProducts } from "../../lib/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Top 10 Products
        </h2>
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
