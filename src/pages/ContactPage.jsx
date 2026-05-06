import Navbar from '../components/Navbar';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book an Appointment
            </h1>
            <p className="text-xl text-blue-100">
              Schedule your visit with our expert medical team
            </p>
          </div>
        </div>
        <AppointmentForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
