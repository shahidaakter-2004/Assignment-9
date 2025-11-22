// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlantDetails from "./pages/PlantDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      {/* Navbar সব পেজে থাকবে */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Protected Plant Details */}
        <Route
          path="/plants/:id"
          element={
            <PrivateRoute>
              <PlantDetails />
            </PrivateRoute>
          }
        />

        {/* Protected My Profile Page */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Footer সব পেজে থাকবে */}
      <Footer />
    </Router>
  );
}

export default App;
