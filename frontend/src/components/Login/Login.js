import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import style from "./Login.module.css";
import LoginScreen from "./LoginScreen";
import LostPassword from "./LostPassword";
import Register from "./Register";
import LoginReset from "./LoginReset";
import PageNotFound from "../PageNotFound";
import Head from "../../Helper/Head";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <main className={style.login}>
      <Head title="Login" />
      <section className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="register" element={<Register />} />
          <Route path="lost-password" element={<LostPassword />} />
          <Route path="reset-password" element={<LoginReset />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </main>
  );
};

export default Login;
