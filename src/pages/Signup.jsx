// src/pages/Signup.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const { registerUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(pwd)) return "Password must contain at least one lowercase letter.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const pwdError = validatePassword(password);
    setPasswordError(pwdError);
    if (pwdError) return;

    try {
      await registerUser(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      alert("✅ Signup successful!");
      navigate("/");
    } catch (error) {
      setSubmitError(error?.message || "Signup failed. Please try again.");
    }
  };

  const handleGoogleSignup = async () => {
    setSubmitError("");
    try {
      await googleLogin();
      navigate("/");
    } catch (error) {
      setSubmitError(error?.message || "Google signup failed. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.title}>Create your account</h2>
        <p style={styles.subtitle}>Join GreenNest — explore plants, care tips & book experts.</p>

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

          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(validatePassword(e.target.value));
              }}
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

          {passwordError && <div style={styles.errorText}>{passwordError}</div>}
          {submitError && <div style={styles.submitError}>{submitError}</div>}

          <button type="submit" style={styles.primaryBtn}>Register</button>
        </form>

        <div style={styles.orRow}>
          <span style={styles.hrLine}></span>
          <span style={styles.orText}>or</span>
          <span style={styles.hrLine}></span>
        </div>

        <button onClick={handleGoogleSignup} style={styles.googleBtn}>Continue with Google</button>

        <p style={styles.bottomText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    padding: "20px",
   },
  box: {
    width: "360px",
    padding: "24px",
    background: "#f1f8e9",
    borderRadius: "8px",
    boxShadow: "0 0 12px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  title: { fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: 600, color: "#000", marginBottom: "10px" , marginTop: "10px" },
  subtitle: { fontSize: "14px", fontWeight: 600, color: "#17781c", marginBottom: "18px" },
  form: { display: "flex", flexDirection: "column", gap: "12px", width: "100%" },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
  },
  showBtn: {
    position: "absolute",
    right: "10px",
    top: "12px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "#000",
    fontWeight: 400,
  },
  primaryBtn: {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    background: "#2f7a3f",
    color: "white",
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
  },
  googleBtn: {
    marginTop: "12px",
    padding: "12px",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #dcdcdc",
    background: "#17781c",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
  orRow: { display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" },
  hrLine: { flex: 1, height: "1px", background: "#e6efe6" },
  orText: { fontSize: "13px", color: "#6a846f" },
  bottomText: { marginTop: "14px", fontSize: "14px", color: "#3e5c4a" },
  link: { color: "#1e8b57", textDecoration: "none", fontWeight: 600 },
  errorText: { color: "#c64545", fontSize: "13px", marginTop: "6px" },
  submitError: { background: "#ffecec", color: "#b12222", padding: "8px 10px", borderRadius: "6px", fontSize: "13px", marginTop: "6px" },
};

export default Signup;
