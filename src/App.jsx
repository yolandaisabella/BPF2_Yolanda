import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/tailwind.css";

import Loading from "./components/Loading";

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const VisitorLayout = React.lazy(() => import("./layouts/VisitorLayout"));

// Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Visitor = React.lazy(() => import("./pages/Visitor"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        

        {/* Visitor */}
        <Route element={<VisitorLayout />}>
          <Route path="/visitor" element={<Visitor />} />
        </Route>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;