import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        {/* About Hero with Photo Background */}
        <div className="relative bg-blue-600 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=600&fit=crop"
              alt="Hospital Building"
              className="w-full h-full object-cover opacity-20 hover:opacity-30 transition duration-500"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
              About TCR Hospital
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
              Delivering compassionate, world-class healthcare since 2005
            </p>
          </div>
        </div>

        {/* Mission & Vision with Photo Accents */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="fade-in relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Medical Equipment"
                className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition duration-500"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare to every patient who walks through our doors. We combine cutting-edge medical technology with compassionate care to improve the health and well-being of our community.
              </p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop"
                alt="Operating Room"
                className="w-full h-48 object-cover rounded-xl mb-6 hover:scale-105 transition duration-500"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading healthcare provider in Chennai, recognized for clinical excellence, patient-centered care, and innovation in medical services. We strive to set new standards in healthcare delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us with Hover Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 fade-in">
              Why Choose TCR Hospital?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🏥', title: 'State-of-the-Art Facilities', desc: 'Modern infrastructure with latest medical technology' },
                { icon: '👨‍⚕️', title: 'Expert Medical Team', desc: 'Highly qualified doctors with years of experience' },
                { icon: '⏰', title: '24/7 Emergency Care', desc: 'Round-the-clock emergency services for critical care' },
                { icon: '💊', title: 'Affordable Care', desc: 'Quality healthcare at reasonable costs' },
                { icon: '📍', title: 'Prime Location', desc: 'Conveniently located in Anna Nagar, Chennai' },
                { icon: '❤️', title: 'Patient-Centered', desc: 'Compassionate care focused on patient needs' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="fade-in bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2 hover:bg-blue-50"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years of Service' },
              { number: '50+', label: 'Expert Doctors' },
              { number: '10k+', label: 'Patients Served' },
              { number: '24/7', label: 'Emergency Care' }
            ].map((stat, index) => (
              <div key={index} className="fade-in hover:scale-110 transition" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
