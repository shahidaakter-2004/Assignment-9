import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlantsList from "./components/PlantsList";
import Footer from "./components/Footer";
import PlantDetails from "./pages/PlantDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./routes/PrivateRoute";  // ✅ নতুন import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PlantsList />
              <Footer />
            </>
          }
        />

        {/* ✅ এখন PlantDetails শুধু লগইন করা ইউজাররাই দেখতে পারবে */}
        <Route
          path="/plants/:id"
          element={
            <PrivateRoute>
              <PlantDetails />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

