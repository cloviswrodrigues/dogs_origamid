import React from "react";
import { useLocation } from "react-router-dom";

import style from "./LoginScreen.module.css";
import { PASSWORD_RESET } from "../../Api";

const LoginReset = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const key = query.get("key");
    const login = query.get("login");

    const body = {
      key,
      login,
      password: newPassword,
    };

    console.log("body: ", body);
    const { url, options } = PASSWORD_RESET(body);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
    } else {
      const { message } = json;
      setError(message);
    }
    setLoading(false);
  }

  return (
    <div className={`animeLeft ${style.loginForm}`}>
      <h1 className="title-1">Resete a Senha</h1>
      <form action="">
        <label htmlFor="username">Nova Senha</label>
        <input
          type="password"
          name="username"
          value={newPassword}
          onChange={({ target }) => setNewPassword(target.value)}
        />
        {loading ? (
          <button type="submit" className="btn btn-medium" disabled>
            Resetando...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-medium"
            onClick={handleSubmit}
          >
            Resetar
          </button>
        )}
      </form>
      {error && <span className={style.erroForm}>{error}</span>}
    </div>
  );
};

export default LoginReset;
