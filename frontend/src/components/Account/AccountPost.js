import React from "react";
import { useNavigate } from "react-router-dom";
import { PHOTO_POST } from "../../Api";
import style from "./AccountPost.module.css";

const AccountPost = ({ setPageTitle }) => {
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState({});
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError(false);
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("peso", peso);
    formData.append("idade", idade);
    formData.append("img", img.raw);
    const token = window.localStorage.getItem("token");

    const { url, options } = PHOTO_POST(formData, token);
    const response = await fetch(url, options);
    if (response.ok) {
      navigate("/conta");
    } else {
      setError(true);
    }
  }

  function handleImage({ target }) {
    let url = URL.createObjectURL(target.files[0]);
    console.log("url: ", url);
    console.log("target: ", target.files);
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  React.useEffect(() => {
    setPageTitle("Poste sua Foto");
  }, []);

  return (
    <section className={`${style.AccountPost} animeLeft`}>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <label htmlFor="peso">Peso</label>
        <input
          type="number"
          name="peso"
          value={peso}
          onChange={({ target }) => setPeso(target.value)}
        />
        <label htmlFor="idade">Idade</label>
        <input
          type="number"
          name="idade"
          value={idade}
          onChange={({ target }) => setIdade(target.value)}
        />
        <input type="file" name="image" onChange={handleImage} />
        <button type="submit" className="btn btn-medium" onClick={handleSubmit}>
          Enviar
        </button>
        {error && <p className="msg-error">Ocorreu um erro insperado!</p>}
      </form>
      <div>
        {img.preview && (
          <div
            className={style.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default AccountPost;
