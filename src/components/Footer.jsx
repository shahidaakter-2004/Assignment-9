import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <h3>Quick Links</h3>
        <ul style={styles.links}>
          <li><a href="#!" onClick={(e) => e.preventDefault()}>About</a></li>
          <li><a href="#!" onClick={(e) => e.preventDefault()}>Contact</a></li>
          <li><a href="#!" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h3>Follow Us</h3>
        <ul style={styles.social}>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
        </ul>
      </div>

      <p style={styles.copy}>
        © 2025 GreenNest. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#e8f5e9",
    padding: "20px",
    textAlign: "center",
    color: "#2e7d32",
    marginTop: "40px",
    boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
  },
  links: {
    listStyle: "none",
    padding: 0,
  },
  social: {
    listStyle: "none",
    padding: 0,
  },
  copy: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#388e3c",
  },
};

export default Footer;
