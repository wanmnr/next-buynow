// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProducts, getProductBySlug } from "@/lib/products";
import ProductDetail from "./components/ProductDetail";
import ProductFeatures from "./components/ProductFeatures";
import ProductGallery from "./components/ProductGallery";
import ProductSpecifications from "./components/ProductSpecifications";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Top 10`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
      notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-1 lg:order-none">
            <ProductGallery images={product.images} />
          </div>

          <div className="space-y-8">
            <ProductDetail product={product} />

            <ProductFeatures features={product.features} />
          </div>
        </div>

        <div className="mt-12">
          <ProductSpecifications
            specifications={{
              ...product.specifications,
              // Ensure all required fields are present
              brand: product.specifications.brand,
              model: product.specifications.model,
              warranty: product.specifications.warranty,
            }}
          />
        </div>
      </div>
    );
  } catch (error) {
    // This will trigger the closest error.tsx boundary
    throw error;
  }
}
