const HospitalHighlights = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose TCR Hospital?
          </h2>
          <p className="fade-in text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Excellence in healthcare with a personal touch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - 24/7 Emergency */}
          <div className="fade-in relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300" style={{ animationDelay: '0.3s' }}>
            <img
              src="https://media.istockphoto.com/id/2232678008/photo/hospital-building-with-clear-signage-for-urgent-care-emergency-and-other-services-during.webp?a=1&b=1&s=612x612&w=0&k=20&c=t3fJ6TP3ICjrBw1HSNNsFeSUpW7ATAjOy2gkzqc41xk="
              alt="Emergency Care"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-3xl mb-2">🚑</div>
              <h3 className="text-xl font-bold mb-1">24/7 Emergency</h3>
              <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition duration-300">
                Round-the-clock emergency medical services
              </p>
            </div>
          </div>

          {/* Card 2 - Expert Doctors */}
          <div className="fade-in relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300" style={{ animationDelay: '0.4s' }}>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
              alt="Expert Doctors"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <h3 className="text-xl font-bold mb-1">Expert Doctors</h3>
              <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition duration-300">
                Highly qualified medical professionals
              </p>
            </div>
          </div>

          {/* Card 3 - Modern Facilities */}
          <div className="fade-in relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300" style={{ animationDelay: '0.5s' }}>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
              alt="Modern Facilities"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="text-xl font-bold mb-1">Modern Facilities</h3>
              <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition duration-300">
                State-of-the-art medical equipment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalHighlights;
