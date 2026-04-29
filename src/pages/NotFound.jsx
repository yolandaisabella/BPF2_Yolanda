export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 font-sans px-6">
      {/* Elemen Visual 404 */}
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-indigo-500 tracking-widest drop-shadow-sm">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 text-sm rounded-md rotate-12 text-indigo-600 font-bold border-2 border-indigo-500 shadow-md">
          Tersesat?
        </div>
      </div>

      {/* Judul & Pesan */}
      <h2 className="mt-8 text-3xl font-bold text-gray-800 text-center">
        Oops! Halaman Tidak Ditemukan
      </h2>
      <p className="mt-4 text-gray-600 text-center max-w-md leading-relaxed">
        Maaf, kami tidak bisa menemukan halaman yang Anda cari. Mungkin halamannya sudah dihapus, URL-nya salah, atau sedang dalam perbaikan.
      </p>

      {/* Tombol Aksi (Call to Action) */}
      <a
        href="/"
        className="mt-8 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        Kembali ke Beranda
      </a>
      
      {/* Ilustrasi tambahan atau elemen dekoratif (Opsional) */}
      <div className="mt-12 text-6xl animate-bounce">
        🚀
      </div>
    </div>
  );
}