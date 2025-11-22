import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Bring Nature Into Your Home </h1>
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
      "url('https://thumbs.dreamstime.com/b/sunny-living-room-large-green-velvet-sofa-many-potted-plants-exposed-brick-walls-big-windows-create-bright-natural-space-sunny-412972869.jpg?w=1400')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  overlay: {
    backgroundColor: "rgba(33, 97, 38, 0.6)",
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
    backgroundColor: "#17781c",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Hero;
