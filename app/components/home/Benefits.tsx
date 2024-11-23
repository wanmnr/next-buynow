// components/home/Benefits.tsx
export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4">
              {/* Icon placeholder */}
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-blue-600 text-2xl">✓</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Every product meets our strict quality standards
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your doorstep
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-blue-600 text-2xl">↺</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free return policy</p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-blue-600 text-2xl">♡</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Always here to help when you need us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
