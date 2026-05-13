import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLogin", "true");
      navigate("/");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to continue ordering food 🍔
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

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
            Sign In
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Belum punya akun?{" "}
          <Link className="text-orange-500 font-semibold" to="/register">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}