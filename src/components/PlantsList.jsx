import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

function PlantsList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error loading plants:", err));
  }, []);

  const cardStyle = {
    border: "1px solid #c8e6c9",
    borderRadius: "12px",
    padding: "15px",
    backgroundColor: "#f1f8e9",
    cursor: "pointer",
    marginBottom: " 5rem",
  };

  const cardHoverStyle = {
    boxShadow: "0 10px 15px rgba(0,0,0,0.15)",
  };

  const btnStyle = {
    backgroundColor: "#17781c",
    border: "none",
    color: "white",
    padding: "8px 15px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const btnHoverStyle = {
    boxShadow: "0 5px 10px rgba(19, 102, 34, 1)",
  };

  const containerStyle = {
    textAlign: "center",
    padding: "40px 20px",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#17781c",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Top Rated Indoor Plants</h2>
      <div style={gridStyle}>
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            style={cardStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "none")
            }
          >
            <img src={plant.image} alt={plant.plantName} style={imageStyle} />
            <h2>{plant.plantName}</h2>
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              <FaBangladeshiTakaSign style={{ color: "green" }} /> {plant.price}
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              <FaStar style={{ color: "#fcc203ff" }} /> {plant.rating}
            </p>
            <Link to={`/plants/${plant.plantId}`}>
              <button
                style={btnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = btnHoverStyle.boxShadow)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "none")
                }
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlantsList;
