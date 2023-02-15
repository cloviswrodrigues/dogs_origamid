import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import style from "./LoginScreen.module.css";

const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { loginPost } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    loginPost(username, password);
  }

  return (
    <div className={`animeLeft ${style.loginForm}`}>
      <h1 className="title-1">Login</h1>
      <form action="">
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="btn btn-medium" onClick={handleSubmit}>
          Entrar
        </button>
      </form>
      <Link to="/lost-password" className={style.lostPassword}>
        Perdeu a Senha?
      </Link>
      <div className={style.register}>
        <h2 className="title-2">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/register" className="btn btn-small">
          Cadastro
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
