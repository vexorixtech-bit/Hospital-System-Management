import { doctors } from '../data/mockData';

const Doctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Doctors
          </h2>
          <p className="fade-in text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Meet our team of experienced and dedicated medical professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="fade-in bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {doctor.specialization}
                </p>
                <p className="text-gray-600 text-sm">
                  {doctor.experience} experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
