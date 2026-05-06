import { departments } from '../data/mockData';

const Departments = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="fade-in text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Medical Departments
          </h2>
          <p className="fade-in text-gray-600 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Specialized departments equipped with modern technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className="fade-in bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{dept.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {dept.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
