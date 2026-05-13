import products from "../data/products.json";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="menu" className="py-20 px-10 bg-orange-50">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">
          Menu Favorit
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}