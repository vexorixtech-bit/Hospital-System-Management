const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
    alt: 'Modern Hospital Reception'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600',
    alt: 'Operating Room'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600',
    alt: 'Doctor Consulting Patient'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600',
    alt: 'Medical Equipment'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600',
    alt: 'Patient Room'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600',
    alt: 'Pharmacy'
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 fade-in">
            Our Hospital Facilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
            Take a look at our state-of-the-art medical facilities and infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="fade-in overflow-hidden rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
