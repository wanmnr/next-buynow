// components/products/ProductDetail.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "../../types/product";
import Button from "../shared/Button";

interface ProductDetailProps {
  readonly product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();
  const [addingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    try {
      setAddingToCart(true);
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Check if product already exists in cart
      const existingProductIndex = existingCart.findIndex(
        (item: Product) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // Update quantity if product exists
        existingCart[existingProductIndex].quantity =
          (existingCart[existingProductIndex].quantity || 1) + 1;
      } else {
        // Add new product if it doesn't exist
        existingCart.push({ ...product, quantity: 1 });
      }

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(existingCart));

      // You can add a toast notification here
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart");
    } finally {
      setAddingToCart(false);
    }
  };

  const handleBuyNow = () => {
    // You can use various methods to pass product data to checkout:
    // 1. URL parameters
    // 2. Local Storage
    // 3. State Management (Redux, Zustand, etc.)

    // For this example, we'll use localStorage
    localStorage.setItem("checkoutProduct", JSON.stringify(product));
    router.push("/checkout");
  };

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
      <div className="flex gap-4">
        <Button
          disabled={product.stock === 0 || addingToCart}
          onClick={handleAddToCart}
          className="w-full md:w-auto bg-gray-600 hover:bg-gray-700"
        >
          {addingToCart ? "Adding..." : "Add to Cart"}
        </Button>
        <Button
          disabled={product.stock === 0}
          onClick={handleBuyNow}
          className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
