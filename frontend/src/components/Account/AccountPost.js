import React from "react";
import style from "./AccountPost.module.css";

const AccountPost = ({ setPageTitle }) => {
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [image, setImage] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("nome: ", nome);
    console.log("peso: ", peso);
    console.log("idade: ", idade);
    console.log("image: ", image);
  }

  React.useEffect(() => {
    setPageTitle("Poste sua Foto");
  }, []);

  return (
    <form className={`${style.AccountPost} animeLeft`}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label htmlFor="peso">Peso</label>
      <input
        type="text"
        name="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <label htmlFor="idade">Idade</label>
      <input
        type="text"
        name="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type="file"
        name="image"
        value={image}
        onChange={({ target }) => setImage(target.value)}
      />
      <button type="submit" className="btn btn-medium" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default AccountPost;
