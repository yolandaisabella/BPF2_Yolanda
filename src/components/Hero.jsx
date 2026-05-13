export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-orange-50 flex items-center px-10"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Nikmati Makanan Favoritmu
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Pesan makanan favorit lebih cepat dan mudah bersama Foodies.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
            Pesan Sekarang
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};
