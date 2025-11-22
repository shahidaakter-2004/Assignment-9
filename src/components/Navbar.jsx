// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/eco-logo-removebg-preview.png";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"; // CSS IMPORT MUST!

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      
      {/* Left: Logo + Title */}
      <div className="logo-container">
        <img src={logo} alt="GreenNest Logo" className="logo" />
        <h1 className="title">GreenNest</h1>
      </div>

      {/* Right: Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/plants/1">Plants</Link>

        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Signup</Link>}

        {user && (
          <>
            <Link to="/profile">My Profile</Link>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
