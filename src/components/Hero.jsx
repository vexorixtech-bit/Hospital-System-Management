import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Hospital Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white z-10">
        <h1 className="fade-in text-4xl md:text-6xl font-bold mb-6" style={{ animationDelay: '0.1s' }}>
          Your Health, Our Priority
        </h1>
        <p className="fade-in text-xl md:text-2xl mb-8 text-gray-100" style={{ animationDelay: '0.3s' }}>
          Trusted medical care with expert doctors in Chennai
        </p>
        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.5s' }}>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 hover:shadow-lg"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
