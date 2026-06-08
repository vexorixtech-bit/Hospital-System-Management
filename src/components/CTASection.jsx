import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920"
          alt="Hospital Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="fade-in text-3xl md:text-4xl font-bold mb-4">
          Ready to Prioritize Your Health?
        </h2>
        <p className="fade-in text-xl text-blue-100 mb-8 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Book an appointment with our expert doctors today and take the first step towards better health.
        </p>
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 hover:shadow-lg"
          >
            Book Appointment Now
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
