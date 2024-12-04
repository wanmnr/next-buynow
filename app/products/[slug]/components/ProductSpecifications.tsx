// components/products/ProductSpecifications.tsx
interface ProductSpecificationsProps {
  readonly specifications: Record<string, string>;
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="bg-gray-50 p-4 rounded-lg">
            <dt className="text-sm text-gray-600 mb-1">{key}</dt>
            <dd className="font-medium">{value}</dd>
          </div>
        ))}
      </div>
    </section>
  );
}
