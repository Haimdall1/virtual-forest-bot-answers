export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Haimdall has transformed how we handle customer calls. The AI is incredibly natural and our clients love it.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
    },
    {
      quote: "The best virtual reception service we've ever used. It's like having a full-time receptionist at a fraction of the cost.",
      author: "Michael Chen",
      role: "Founder, Innovation Labs",
    },
    {
      quote: "Setup was quick, and the AI adapts perfectly to our business needs. Couldn't be happier with the service.",
      author: "Emma Williams",
      role: "Operations Director, GrowthCo",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-forest-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-forest mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};