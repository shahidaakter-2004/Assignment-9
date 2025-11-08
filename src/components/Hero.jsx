import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Bring Nature Into Your Home 🌿</h1>
        <p style={styles.subtitle}>
          Explore our handpicked indoor plants and make your space greener.
        </p>
        <button style={styles.button}>Explore Plants</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "70vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#81c784",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Hero;
