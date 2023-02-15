import React from "react";
import style from "./LoginScreen.module.css";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className={`animeLeft ${style.loginForm}`}>
      <h1 className="title-1">Cadastre-se</h1>
      <form action="">
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="btn btn-medium" onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
