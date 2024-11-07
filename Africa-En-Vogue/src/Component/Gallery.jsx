const styles = [
  {
    src: "https://res.cloudinary.com/decwhxo32/image/upload/v1730983949/2024-09-10_1_p5nysn.jpg",
    caption: "Elegant Ankara Gown",
  },
  {
    src: "https://res.cloudinary.com/decwhxo32/image/upload/v1730983981/2024-09-10_4_otvnp7.jpg",
    caption: "Traditional Boubou Design",
  },
  // Add more images as needed
];

const OurStyles = () => (
  <section className="py-16 bg-white">
    <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
      Our Styles
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8">
      {styles.map((style, index) => (
        <div key={index} className="relative group">
          <img
            src={style.src}
            alt={style.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold">{style.caption}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurStyles;
