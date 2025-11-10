// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/eco-logo-removebg-preview.png";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="GreenNest Logo" style={styles.logo} />
        <h2 style={styles.title}>GreenNest</h2>
      </div>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/plants/1">Plants</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Signup</Link>}
        {user && (
          <button style={styles.logoutBtn} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    padding: "10px 30px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  title: {
    color: "#2e7d32",
    fontFamily: "Poppins, sans-serif",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  logoutBtn: {
    backgroundColor: "#66bb6a",
    border: "none",
    color: "white",
    borderRadius: "5px",
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default Navbar;
