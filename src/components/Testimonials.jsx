import { testimonials } from '../data/mockData';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient Testimonials
          </h2>
          <p className="fade-in text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            What our patients say about our care and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="fade-in bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg text-gray-300">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
