import React from "react";
import logo from "../assets/eco-logo-removebg-preview.png"; // লোগো ইমেজ ইম্পোর্ট

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="GreenNest Logo" style={styles.logo} />
        <h2 style={styles.title}>GreenNest</h2>
      </div>
      <div style={styles.links}>
        <a href="#">Home</a>
        <a href="#">Plants</a>
        <a href="#">My Profile</a>
      </div>
    </nav>
  );
}

// inline style object
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
};

export default Navbar;
