import React from "react";
import style from "./LoginScreen.module.css";
import { PASSWORD_LOST } from "../../Api";
import Head from "../../Helper/Head";

const SUCCESS = "success";
const ERROR = "error";

const LostPassword = () => {
  const [login, setLogin] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [responseStatus, setResponseStatus] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setResponseStatus(null);
    setLoading(true);
    const host = window.location.origin;
    const urlCallBack = `${host}/login/reset-password`;
    const body = {
      login,
      url: urlCallBack,
    };
    const { url, options } = PASSWORD_LOST(body);
    const response = await fetch(url, options);
    if (response.ok) {
      setResponseStatus(SUCCESS);
    } else {
      setResponseStatus(ERROR);
    }
    setLoading(false);
  }

  return (
    <div className={`animeLeft ${style.loginForm}`}>
      <Head title="Perdeu a senha" />
      <h1 className="title-1">Perdeu a senha</h1>
      {responseStatus === SUCCESS ? (
        <p className={style.successForm}>Email enviado</p>
      ) : (
        <>
          <form action="">
            <label htmlFor="login">Email / Usuário</label>
            <input
              type="text"
              name="login"
              value={login}
              onChange={({ target }) => setLogin(target.value)}
            />
            {loading ? (
              <button type="submit" className="btn btn-medium" disabled>
                Enviando...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-medium"
                onClick={handleSubmit}
              >
                Enviar Email
              </button>
            )}
          </form>
          {responseStatus === ERROR && (
            <span className={style.erroForm}>
              Ocorreu erro no envio de email
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default LostPassword;
