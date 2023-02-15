import React from "react";
import { Routes, Route } from "react-router-dom";
import style from "./Login.module.css";
import LoginScreen from "./LoginScreen";
import LostPassword from "./LostPassword";
import Register from "./Register";

const Login = () => {
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
