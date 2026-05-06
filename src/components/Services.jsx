import { services } from '../data/mockData';

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="fade-in text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            We provide comprehensive medical services with state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="fade-in bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-2"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
