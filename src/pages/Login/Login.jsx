import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });


  const { login, isAuthenticated} = useAuth();

  // idle | submitting

  const [status,setStatus] = useState("idle")

  const location = useLocation()

  const [submissionResult,setSeubmissionResult] = useState(false)

  const navigate = useNavigate()


  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  
 async  function handleSubmit(e) {
    e.preventDefault();
    
    setStatus("submitting")

    location.state = null

    await login(formData.email, formData.password);

    if(!isAuthenticated)
        setSeubmissionResult(true)
    else
      navigate("/host".{replace : true})
  
      
    setStatus("idle")
  }

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>

      <h1 className={styles["heading"]}>Sign into your account</h1>

      {(location.state?.message && status === "idle") && <p className={styles["warning-login"]}>You must login first</p>}

      <input
        className={styles["input-element"]}
        type="email"
        value={formData.email}
        name="email"
        placeholder="Email address"
        onChange={handleChange}
      />

      <input
        className={styles["input-element"]}
        type="password"
        value={formData.password}
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      {submissionResult && <p className={styles["warning-login"]}>Invalid credentials</p>}

      <button disabled = {status === "submitting"} className={styles["btn"]}>{(status === "idle")?("Submit"):("Submitting...")}</button>
    </form>
  );
};

export default Login;
