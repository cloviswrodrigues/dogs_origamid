import React from "react";
import style from "./LoginScreen.module.css";

const LostPassword = () => {
  const [login, setLogin] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={`animeLeft ${style.loginForm}`}>
      <h1 className="title-1">Perdeu a senha</h1>
      <form action="">
        <label htmlFor="login">Email / Usuário</label>
        <input
          type="text"
          name="login"
          value={login}
          onChange={({ target }) => setLogin(target.value)}
        />
        <button type="submit" className="btn btn-medium" onClick={handleSubmit}>
          Enviar Email
        </button>
      </form>
    </div>
  );
};

export default LostPassword;
