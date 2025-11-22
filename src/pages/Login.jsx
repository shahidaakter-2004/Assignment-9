// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { loginUser, googleLogin, resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
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

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email in the email field, then click Forgot Password.");
      return;
    }
    try {
      await resetPassword(email);
      alert("✅ Password reset email sent. Check your inbox.");
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
        <div style={{ position: "relative", width: "250px" }}>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Enter password"
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
          Login
        </button>
      </form>

      <div style={{ marginTop: 10 }}>
        <button onClick={handleForgotPassword} style={styles.linkBtn}>
          Forgot Password
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={handleGoogleLogin} style={styles.googleBtn}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "40px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
  input: { padding: "10px", width: "250px", borderRadius: "6px", border: "1px solid #ccc" },
  btn: { backgroundColor: "#4CAF50", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" },
  googleBtn: { marginTop: "10px", backgroundColor: "#DB4437", color: "white", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" },
  linkBtn: { background: "none", border: "none", color: "#1e88e5", cursor: "pointer", textDecoration: "underline" },
};

export default Login;
