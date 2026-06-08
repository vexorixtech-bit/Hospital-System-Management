import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop',
  'https://unsplash.com/photos/group-of-doctors-walking-in-corridor-on-medical-conference-talking-ZgLTbwiRYv4',
  'https://unsplash.com/photos/white-and-black-hospital-bed-vsSu0oGtLoI',
  'https://www.istockphoto.com/photo/busy-hospital-hallway-filled-with-medical-experts-in-white-coats-and-blue-uniforms-gm2191184079-609517939?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhospital&utm_term=hospital%3A%3A%3A%3A95829d60-21c5-422d-98ec-294a00351eec'
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
