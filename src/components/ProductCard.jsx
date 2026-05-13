export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3>{product.name}</h3>
        <p>Rp {product.price?.toLocaleString()}</p>
      </div>
    </div>
  );
}