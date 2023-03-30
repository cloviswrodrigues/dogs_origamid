import React from "react";

import style from "./LoginScreen.module.css";
import { USER_POST } from "../../Api";
import { UserContext } from "../../Context/UserContext";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    const body = {
      username,
      password,
      email,
    };
    const { url, options } = USER_POST(body);

    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      userLogin(username, password);
    } else {
      setError(json.message);
    }
    setLoading(false);
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
        {loading ? (
          <button type="submit" className="btn btn-medium" disabled>
            Cadastrando...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-medium"
            onClick={handleSubmit}
          >
            Cadastrar
          </button>
        )}
      </form>
      {error && <span className={style.erroForm}>{error}</span>}
    </div>
  );
};

export default Register;
