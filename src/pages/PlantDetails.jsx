// src/pages/PlantDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  // consultation form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingMsg, setBookingMsg] = useState("");

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.plantId === parseInt(id));
        setPlant(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!plant) return <h2 style={{ padding: 20 }}>Loading...</h2>;

  const handleBooking = (e) => {
    e.preventDefault();
    // simple UI-only booking — in real app you'd POST to backend
    setBookingMsg(`✅ Thanks ${name || "guest"}! Consultation requested for ${plant.plantName}. We'll contact ${email || "you"} soon.`);
    setName("");
    setEmail("");
    setTimeout(() => setBookingMsg(""), 6000);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <img src={plant.image} alt={plant.plantName} width="300" style={{ borderRadius: 12 }} />
      <h2>{plant.plantName}</h2>
      <p>{plant.description}</p>
      <p>💲 Price: {plant.price}</p>
      <p>⭐ Rating: {plant.rating}</p>
      <p>🪴 Stock: {plant.availableStock}</p>

      <hr style={{ margin: "20px 0" }} />

      <h3>Book Consultation</h3>
      <form onSubmit={handleBooking} style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center", marginTop: 12 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" style={inputStyle} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" style={inputStyle} />
        <button type="submit" style={btnStyle}>Book Now</button>
      </form>

      {bookingMsg && <p style={{ marginTop: 12 }}>{bookingMsg}</p>}
    </div>
  );
}

const inputStyle = { padding: 10, width: 260, borderRadius: 6, border: "1px solid #ccc" };
const btnStyle = { padding: "8px 16px", backgroundColor: "#81c784", color: "white", border: "none", borderRadius: 6, cursor: "pointer" };

export default PlantDetails;
