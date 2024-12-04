// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../lib/products";
import ProductDetail from "./components/ProductDetail";
import ProductFeatures from "./components/ProductFeatures";
import ProductGallery from "./components/ProductGallery";
import ProductSpecifications from "./components/ProductSpecifications";

export default async function ProductPage({
  params,
}: {
  readonly params: { readonly slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productImages = product.images.map((url) => ({
    id: url,
    url: url,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductGallery images={productImages} />
      <ProductDetail product={product} />
      <ProductFeatures features={product.features} />
      <ProductSpecifications specifications={product.specifications} />
    </div>
  );
}
