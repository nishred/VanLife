import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/host");
  }, [isAuthenticated]);

  function handleChange(e) {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(formData.email, formData.password);
  }

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <h1 className={styles["heading"]}>Sign into your account</h1>

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

      <button className={styles["btn"]}>Submit</button>
    </form>
  );
};

export default Login;
