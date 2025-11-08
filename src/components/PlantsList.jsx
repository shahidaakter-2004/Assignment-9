import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PlantsList() {
  const [plants, setPlants] = useState([]);

  // JSON থেকে ডেটা ফেচ করা
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plants:", err));
  }, []);

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>🌿 Top Rated Indoor Plants</h2>
      <div style={styles.grid}>
        {plants.map((plant) => (
          <div key={plant.plantId} style={styles.card}>
            <img src={plant.image} alt={plant.plantName} style={styles.image} />
            <h3>{plant.plantName}</h3>
            <p>💲 {plant.price}</p>
            <p>⭐ {plant.rating}</p>
            <Link to={`/plants/${plant.plantId}`}>
            <button style={styles.btn}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
  },
  heading: {
    fontSize: "2rem",
    color: "#2e7d32",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #c8e6c9",
    borderRadius: "12px",
    padding: "15px",
    backgroundColor: "#f1f8e9",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  btn: {
    backgroundColor: "#81c784",
    border: "none",
    color: "white",
    padding: "8px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default PlantsList;
