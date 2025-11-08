// src/pages/PlantDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlantDetails() {
  const { id } = useParams(); // URL থেকে id নেবে
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found);
      });
  }, [id]);

  if (!plant) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <img src={plant.image} alt={plant.plantName} width="300" />
      <h2>{plant.plantName}</h2>
      <p>{plant.description}</p>
      <p>💲 Price: {plant.price}</p>
      <p>⭐ Rating: {plant.rating}</p>
      <p>🪴 Stock: {plant.availableStock}</p>
    </div>
  );
}

export default PlantDetails;
