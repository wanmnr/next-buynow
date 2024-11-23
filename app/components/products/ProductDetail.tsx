// components/products/ProductDetail.tsx
import { Product } from "../../types/product";
import Button from "../shared/Button";

interface ProductDetailProps {
  readonly product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-bold">${product.price}</span>
        <span
          className={`px-3 py-1 rounded ${
            product.stock > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <p className="text-gray-600 mb-8">{product.description}</p>
      <Button
        disabled={product.stock === 0}
        onClick={() => {
          /* Add to cart logic */
        }}
        className="w-full md:w-auto"
      >
        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
      </Button>
    </div>
  );
}
