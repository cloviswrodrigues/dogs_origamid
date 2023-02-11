import { Link } from "react-router-dom";

import style from "./LoginScreen.module.css";

const LoginScreen = () => {
  return (
    <main className={style.login}>
      <div className={style.loginImg}></div>
      <div className={style.loginForm}>
        <h1 className="title-1">Login</h1>
        <form action="">
          <label htmlFor="user">Usuário</label>
          <input type="text" name="user" />
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" />
          <button type="submit" className="btn btn-medium">
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
    </main>
  );
};

export default LoginScreen;
