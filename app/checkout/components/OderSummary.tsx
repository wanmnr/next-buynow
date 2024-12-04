// app/checkout/components/OrderSummary.tsx
import { formatCurrency } from "../../utils/formatting";

interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
}

interface OrderSummaryProps {
  readonly products: Product[];
  readonly subtotal: number;
  readonly shipping: number;
  readonly tax: number;
}

export function OrderSummary({
  products,
  subtotal,
  shipping,
  tax,
}: OrderSummaryProps) {
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between">
            <div>
              <p className="text-sm text-gray-600">{product.name}</p>
              <p className="text-xs text-gray-500">Qty: {product.quantity}</p>
            </div>
            <p className="text-sm text-gray-900">
              {formatCurrency(product.price * product.quantity)}
            </p>
          </div>
        ))}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="text-sm text-gray-900">{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-600">Shipping</p>
            <p className="text-sm text-gray-900">{formatCurrency(shipping)}</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-600">Tax</p>
            <p className="text-sm text-gray-900">{formatCurrency(tax)}</p>
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-base font-medium text-gray-900">Total</p>
            <p className="text-base font-medium text-gray-900">
              {formatCurrency(total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
