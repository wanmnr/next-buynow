// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../lib/products";
import ProductDetail from "../../components/products/ProductDetail";
import ProductFeatures from "../../components/products/ProductFeatures";
import ProductGallery from "../../components/products/ProductGallery";
import ProductSpecifications from "../../components/products/ProductSpecifications";

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
