// src/pages/Profile.jsx

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);

  // Form state
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserProfile({ displayName, photoURL });   // FIXED
      setMessage("✅ Profile Updated Successfully!");
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading Profile...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "20px" }}>My Profile</h2>

      {message && <p style={styles.message}>{message}</p>}

      <div style={{ marginBottom: "20px" }}>
        <img
          src={photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          width="150"
          style={{ borderRadius: "10px" }}
        />
      </div>

      <form onSubmit={handleUpdate} style={styles.form}>
        <label><strong>Name:</strong></label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          style={styles.input}
          required
        />

        <label><strong>Photo URL:</strong></label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.btn}>Update Profile</button>
      </form>

      <div style={styles.info}>
        <h3>Current Info:</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Name:</strong> {user.displayName || "No Name Added"}</p>

        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User"
            width="120"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    background: "#e8f5e9",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    textAlign: "left",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  btn: {
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  },
  info: {
    marginTop: "20px",
    textAlign: "left",
    background: "#ffffff",
    padding: "15px",
    borderRadius: "10px"
  },
  message: {
    fontWeight: "bold",
    marginBottom: "15px"
  }
};

export default Profile;


