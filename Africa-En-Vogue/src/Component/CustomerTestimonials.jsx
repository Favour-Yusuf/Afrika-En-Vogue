const testimonials = [
    "Absolutely stunning outfits! Africa En Vogue truly captures the essence of African fashion.",
    "Their attention to detail and quality is unmatched. I love every piece I’ve gotten from them.",
  ];
  
  const Testimonials = () => (
    <section className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Customer Testimonials</h2>
      <div className="mt-8 space-y-8 max-w-lg mx-auto">
        {testimonials.map((text, index) => (
          <blockquote key={index} className="text-gray-600 italic">"{text}"</blockquote>
        ))}
      </div>
    </section>
  );


  export default Testimonials
  