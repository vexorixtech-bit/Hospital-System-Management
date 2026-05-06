import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Medical Services
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive healthcare solutions for you and your family
            </p>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
