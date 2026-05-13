export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-10">
      <div className="grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Foodies</h2>
          <p className="text-gray-400">Platform pemesanan makanan terbaik.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak</h3>
          <p>Email: foodies@gmail.com</p>
          <p>Telepon: 0812-3456-7890</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Sosial Media</h3>
          <div className="flex gap-4">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
        © 2025 Foodies
      </div>
    </footer>
  );
}