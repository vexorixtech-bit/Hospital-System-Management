import Navbar from '../components/Navbar';
import Doctors from '../components/Doctors';
import Footer from '../components/Footer';

const DoctorsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Expert Doctors
            </h1>
            <p className="text-xl text-blue-100">
              Meet our team of experienced medical professionals
            </p>
          </div>
        </div>
        <Doctors />
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
