import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState("");
  const [localImage, setLocalImage] = useState(null); 
  const [message, setMessage] = useState("");

  
  const handleLocalImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localURL = URL.createObjectURL(file);
      setLocalImage(localURL);
      setPhotoURL(localURL); 
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const updates = {};
    if (displayName) updates.displayName = displayName;
    if (photoURL) updates.photoURL = photoURL;

    try {
      await updateUserProfile(updates);
      setMessage("✅ Profile Updated Successfully!");
      setShowModal(false);
    } catch (error) {
      setMessage("❌ " + error.message);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "15px", fontSize: "26px", fontWeight: "bold" }}>
        My Profile
      </h2>

      {message && <p style={styles.message}>{message}</p>}

    
      <img
        src={user.photoURL || "https://via.placeholder.com/200"}
        width="200"
        height="200"
        alt="profile"
        style={{ borderRadius: "10px", marginBottom: "10px", objectFit: "cover" }}
      />

      <p style={{ fontSize: "20px" }}>
        <strong>Name:</strong> {user.displayName || "No Name Added"}
      </p>
      <p style={{ fontSize: "18px" }}>
        <strong>Email:</strong> {user.email}
      </p>

      <button style={styles.btn} onClick={() => setShowModal(true)}>
        Update Profile
      </button>

      
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalBox}>
            <h3 style={{ textAlign: "center", fontSize: "22px" }}>
              Update Your Profile
            </h3>

            <form onSubmit={handleSave} style={styles.modalForm}>
              <label style={{ fontSize: "16px" }}><strong>Name:</strong></label>
              <input
                type="text"
                style={styles.input}
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />

              
              <label style={{ fontSize: "16px" }}><strong>Photo URL:</strong></label>
              <input
                type="text"
                style={styles.input}
                placeholder="Enter new photo URL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />

              
              <label style={{ fontSize: "16px" }}><strong>Upload from Device:</strong></label>
              <input
                type="file"
                accept="image/*"
                style={styles.input}
                onChange={handleLocalImage}
              />

              
              {localImage && (
                <img
                  src={localImage}
                  alt="preview"
                  width="150"
                  height="150"
                  style={{
                    marginTop: "10px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    alignSelf: "center",
                  }}
                />
              )}

              <div style={styles.modalButtons}>
                <button type="submit" style={styles.saveBtn}>
                  Save Changes
                </button>
                <button
                  type="button"
                  style={styles.closeBtn}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
const styles = {
  container: {
    width: "450px",
    height: "600px",
    margin: "40px auto",
    textAlign: "center",
    padding: "20px",
    background: "#e8f5e9",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    position: "relative",
  },

  btn: {
    padding: "12px",
    background: "#4CAF50",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
    width: "220px",
    fontSize: "18px",
  },

  message: {
    color: "green",
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "18px",
  },

  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },

  modalBox: {
    width: "360px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },

  modalForm: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },

  saveBtn: {
    background: "#4CAF50",
    padding: "10px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "130px",
    fontSize: "16px",
  },

  closeBtn: {
    background: "gray",
    padding: "10px",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    width: "130px",
    fontSize: "16px",
  },
};

export default Profile;
