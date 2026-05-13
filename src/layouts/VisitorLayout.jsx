import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex-1 p-4 pt-20">
        <Navbar />   
        <Outlet />
      </div>

    </div>
  );
}