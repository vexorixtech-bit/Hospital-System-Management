import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Departments from '../components/Departments';
import HospitalHighlights from '../components/HospitalHighlights';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Departments />
      <HospitalHighlights />
      <Gallery />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
