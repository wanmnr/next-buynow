// components/home/CompanyIntro.tsx
export default function CompanyIntro() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our Products?
          </h2>
          <p className="text-gray-600 mb-12">
            With years of experience in product curation and testing, we bring
            you only the best items that meet our strict quality standards. Each
            product in our top 10 list has been thoroughly evaluated for
            performance, durability, and value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Only the highest quality products make it to our top 10 list.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Selection</h3>
              <p className="text-gray-600">
                Our team of experts carefully evaluates each product.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Value for Money</h3>
              <p className="text-gray-600">
                We ensure you get the best value for your investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
