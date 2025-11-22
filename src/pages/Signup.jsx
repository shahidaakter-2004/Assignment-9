// src/pages/Signup.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  // password validation: at least 6 chars, uppercase and lowercase
  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(pwd)) return "Password must contain at least one lowercase letter.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const pwdError = validatePassword(password);
    if (pwdError) {
      alert("❌ " + pwdError);
      return;
    }

    try {
      const userCredential = await registerUser(email, password);
      // update displayName and photoURL
      await updateUserProfile({ displayName: name, photoURL });
      alert("✅ Signup successful!");
      navigate("/"); // go to home
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Photo URL (optional)"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <div style={{ position: "relative", width: "250px" }}>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            style={{ position: "absolute", right: 8, top: 8, background: "transparent", border: "none", cursor: "pointer" }}
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" style={styles.btn}>
          Register
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
  input: { padding: "10px", width: "250px", borderRadius: "6px", border: "1px solid #ccc" },
  btn: { backgroundColor: "#388E3C", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" },
};

export default Signup;
