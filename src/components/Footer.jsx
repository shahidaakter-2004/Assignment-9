import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        
        {/* Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a style={styles.link} href="#!" onClick={(e) => e.preventDefault()}>About</a></li>
            <li><a style={styles.link} href="#!" onClick={(e) => e.preventDefault()}>Contact</a></li>
            <li><a style={styles.link} href="#!" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Follow Us</h3>
          <ul style={styles.list}>
            <li><a style={styles.link} href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a style={styles.link} href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a style={styles.link} href="https://pinterest.com" target="_blank">Pinterest</a></li>
          </ul>
        </div>

      </div>

      <div style={styles.bottomBar}>
        © 2025 <span style={{ fontWeight: "600" }}>GreenNest</span>. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    position: "relative",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW2CjuxtU3tF3JOJRW5fC9L7K48W-NtrT-fNwtkajHZsgMrlaSmPSWmqwbeBGAst8vl0&usqp=CAU')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 20px 30px 20px",
    marginTop: "50px",
    color: "white",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.45)",
    backdropFilter: "blur(2px)",
  },

  container: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "60px",
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
    zIndex: 2,
  },

  column: {
    minWidth: "200px",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(6px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },

  heading: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "12px",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  link: {
    display: "block",
    padding: "5px 0",
    color: "#e8f5e9",
    textDecoration: "none",
    fontSize: "15px",
    transition: "color 0.3s",
  },

  bottomBar: {
    marginTop: "30px",
    paddingTop: "12px",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    fontSize: "14px",
    color: "white",
    position: "relative",
    zIndex: 2,
    textAlign: "center",      
  },
};

export default Footer;
