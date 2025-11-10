// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { loginUser, googleLogin } = useContext(AuthContext); // make sure names match AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      // after successful login, go to intended route
      navigate(from, { replace: true });
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>
          Login
        </button>
      </form>

      <button onClick={handleGoogleLogin} style={styles.googleBtn}>
        Login with Google
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
  input: { padding: "10px", width: "250px", borderRadius: "6px", border: "1px solid #ccc" },
  btn: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" },
  googleBtn: { marginTop: "10px", backgroundColor: "#DB4437", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" },
};

export default Login;
