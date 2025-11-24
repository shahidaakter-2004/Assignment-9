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
      alert("Please enter your email first.");
      return;
    }
    try {
      await resetPassword(email);
      alert("✅ Password reset email sent!");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h3 style={styles.title}>Log in to your account</h3>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <div style={{ position: "relative", width: "100%" }}>
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
              style={styles.showBtn}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit" style={styles.loginBtn}>
            Log In
          </button>
        </form>

        <button onClick={handleForgotPassword} style={styles.forgotPassword}>
          Forgotten password?
        </button>

        <div style={styles.divider}></div>

        <button onClick={handleGoogleLogin} style={styles.googleBtn}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#fff",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  box: {
    width: "320px",
    padding: "20px",
    background: "#f1f8e9",
    borderRadius: "8px",
    boxShadow: "0 0 12px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1c1e21",
    fontFamily: "Poppins, sans-serif", 
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  },
  input: {
    width: "92%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
  },
  showBtn: {
    position: "absolute",
    right: "10px",
    top: "12px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#000",
    fontWeight: "500",
  },
  loginBtn: {
    backgroundColor: "#17781c",
    color: "white",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
  },
  forgotPassword: {
    marginTop: "10px",
    background: "none",
    border: "none",
    color: "#000",
    cursor: "pointer",
    fontSize: "14px",
  },
  divider: {
    margin: "20px 0",
    height: "1px",
    backgroundColor: "#ddd",
    width: "100%",
  },
  googleBtn: {
    backgroundColor: "#17781c",
    color: "white",
    padding: "12px",
    width: "100%",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
  },
};

export default Login;
