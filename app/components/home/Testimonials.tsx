// components/home/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Verified Buyer",
      content:
        "The quality of these products exceeded my expectations. Absolutely worth every penny!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Enthusiast",
      content:
        "I've tried many similar products, but these are truly the cream of the crop.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Lifestyle Blogger",
      content:
        "These products have transformed my daily routine. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {"★".repeat(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
