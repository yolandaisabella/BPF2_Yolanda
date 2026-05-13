import testimonials from "../data/testimonials.json";
import TestimonialCard from "./TestimonialCard";

export default function Testi() {
  return (
    <section className="py-20 px-10 bg-white">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">
          Testimoni Pelanggan
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
};
