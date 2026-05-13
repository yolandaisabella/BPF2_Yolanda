export default function TestimonialCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <img src={item.avatar} className="w-14 h-14 rounded-full" />
      <h3>{item.name}</h3>
      <p>"{item.review}"</p>
    </div>
  );
}