import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import style from "./Login.module.css";
import LoginScreen from "./LoginScreen";
import LostPassword from "./LostPassword";
import Register from "./Register";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <main className={style.login}>
      <section className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="register" element={<Register />} />
          <Route path="lost-password" element={<LostPassword />} />
        </Routes>
      </section>
    </main>
  );
};

export default Login;
