// components/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90" />
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Our Top 10 Premium Products
          </h1>
          <p className="text-xl mb-8">
            Carefully curated selection of the finest products that will
            transform your lifestyle.
          </p>
          <Link
            href="/#products"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
