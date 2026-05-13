import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-orange-500">Foodies</h1>

      <div className="flex gap-8">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex gap-3">
        <Link className="px-4 py-2 border rounded" to="/login">
          Sign In
        </Link>

        <Link className="px-4 py-2 bg-orange-500 text-white rounded" to="/register">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}