import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({ email, password })
    );

    alert("Register berhasil!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join Foodies & order your favorite meals 🍕
        </p>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
            Sign Up
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Sudah punya akun?{" "}
          <Link className="text-orange-500 font-semibold" to="/login">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}