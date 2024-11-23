// components/home/CallToAction.tsx
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don&apos;t miss out on our carefully selected top 10 products. Start your
          journey to a better lifestyle today.
        </p>
        <Link
          href="/#products"
          className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
