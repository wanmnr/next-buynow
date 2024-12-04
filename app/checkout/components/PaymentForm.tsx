// app/checkout/components/PaymentForm.tsx
import { useState } from "react";

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

interface PaymentFormProps {
  readonly onSubmit: (data: PaymentFormData) => void;
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            <span className="block mb-1">Card Number</span>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) =>
                setFormData({ ...formData, cardNumber: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="**** **** **** ****"
            />
          </label>
        </div>
        {/* Add similar fields for expiry date, CVV, and name on card */}
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Complete Purchase
      </button>
    </form>
  );
}
