import Link from "next/link";

// app/thank-you/page.tsx
export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="text-lg mb-8">
        Your order has been successfully placed. We&apos;ll send you a
        confirmation email shortly with your order details.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Return to Home
      </Link>
    </div>
  );
}
