// components/products/ProductFeatures.tsx

interface ProductFeaturesProps {
  readonly features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Key Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start space-x-3">
            <span className="text-blue-600">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
