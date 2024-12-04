// app/checkout/components/OrderForm.tsx
"use client";
import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import {
  validateEmail,
  validatePhone,
  validatePostalCode,
} from "../../utils/validation";

interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  product?: Product;
}

interface OrderFormProps {
  readonly onSubmit: (data: OrderFormData) => void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "Malaysia",
  });

  useEffect(() => {
    // Retrieve product data from localStorage
    const savedProduct = localStorage.getItem("checkoutProduct");
    if (savedProduct) {
      const product = JSON.parse(savedProduct);
      setFormData((prev) => ({ ...prev, product }));
    }
  }, []);

  const [errors, setErrors] = useState<
    Partial<Record<keyof OrderFormData, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Valid email is required";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Valid phone number is required";
    if (!formData.address1) newErrors.address1 = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!validatePostalCode(formData.postalCode))
      newErrors.postalCode = "Valid postal code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await onSubmit(formData);
      // Clear the product data from localStorage after successful submission
      localStorage.removeItem("checkoutProduct");
    }
  };

  return (
    <div>
      {formData.product && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="flex justify-between">
            <span>{formData.product.name}</span>
            <span>${formData.product.price}</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <span className="block mb-1">First Name</span>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          {/* Add similar fields for other form inputs */}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
