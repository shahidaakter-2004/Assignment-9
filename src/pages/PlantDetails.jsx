import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

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

  if (!plant) return <h2 style={styles.loading}>Loading...</h2>;

  const handleBooking = (e) => {
    e.preventDefault();

    setBookingMsg(
      `✅ Thanks ${name || "guest"}! Consultation requested for ${plant.plantName}. We'll contact ${email || "you"} soon.`
    );

    setName("");
    setEmail("");
    setTimeout(() => setBookingMsg(""), 6000);
  };

  return (
    <div style={styles.page}>

     
     <div style={styles.container}>
  <img src={plant.image} alt={plant.plantName} style={styles.image} />

  <div>
    <h2 style={styles.title}>{plant.plantName}</h2>
    <p style={styles.text}>Category:{plant.category}</p>
    <p style={styles.text}>{plant.description}</p>
    <p style={styles.text}>Price: {plant.price}</p>
    <p style={styles.text}>Rating: {plant.rating}</p>
    <p style={styles.text}>Stock: {plant.availableStock}</p>
    <p style={styles.text}>Care Level: {plant.careLevel}</p>

    
  </div>
</div>


      <hr style={styles.hr} />

      <h3 style={styles.subtitle}>Book Consultation</h3>

      <form onSubmit={handleBooking} style={styles.form}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          style={styles.input}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>Book Now</button>
      </form>

      {bookingMsg && <p style={styles.bookingMsg}>{bookingMsg}</p>}
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
  },

  container: {
  display: "flex",
  gap: "40px",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
},

  
  image: {
    width: "400px",
    borderRadius: 12,
  },

  rightBox: {
    flex: 1,
    minWidth: "280px",
  },

  loading: {
    padding: "20px",
  },

  title: {
    fontSize: "35px",
    fontWeight: 600,
    marginTop: "12px",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "20px",
    fontWeight: 600,
    marginTop: "16px",
    marginBottom: "12px",
    fontFamily: "Poppins, sans-serif",
    textAlign: "center",
  },

  text: {
    marginBottom: "6px",
    fontSize: "20px",
    fontWeight: "500 ",
  },

  hr: {
    margin: "20px 0",
    border: "none",
    height: "1px",
    backgroundColor: "#17781c",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    marginTop: "12px",
  },

  input: {
    width: "260px",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },

  btn: {
    padding: "8px 16px",
    backgroundColor: "#17781c",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },

  bookingMsg: {
    marginTop: "14px",
    fontSize: "18px",
  },
};

export default PlantDetails;
