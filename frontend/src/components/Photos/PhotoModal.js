import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PhotoModal.module.css";
import { ReactComponent as SendSvg } from "../../assets/enviar.svg";
import { PHOTO_GET, COMMENT_POST, PHOTO_DELETE } from "../../Api";
import Loader from "../Loader";
import { UserContext } from "../../Context/UserContext";
import Image from "../../Helper/Image";

const PhotoModal = ({ idPhoto, setShowModal }) => {
  const [photo, setPhoto] = React.useState(null);
  const [comment, setComment] = React.useState("");
  const [error, setError] = React.useState(false);
  const [showBtnDelete, setShowBtnDelete] = React.useState(false);
  const { data: userdata } = React.useContext(UserContext);

  function getPhoto() {
    const { url, options } = PHOTO_GET(idPhoto);
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setPhoto({ ...json.photo, comments: [...json.comments] });
      });
  }

  async function postComment() {
    setError(false);
    const { url, options } = COMMENT_POST(idPhoto, { comment });
    const response = await fetch(url, options);
    if (response.ok) {
      getPhoto();
      setComment("");
    } else {
      setError(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postComment();
  }

  async function handleDelete(e) {
    const confirmed = window.confirm("Tem certeza que deseja deletar?");
    if (confirmed) {
      const { url, options } = PHOTO_DELETE(idPhoto);
      const response = await fetch(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }

  React.useEffect(() => {
    if (userdata && photo) {
      if (userdata.username === photo.author) {
        setShowBtnDelete(true);
      }
    }
  }, [photo, userdata]);

  React.useEffect(() => {
    getPhoto();
  }, []);

  function handleModal(e) {
    const { currentTarget, target } = e;

    if (target == currentTarget) {
      setShowModal(false);
    }
  }

  return (
    <div className={styles.modalBackground} onClick={handleModal}>
      {photo ? (
        <div className={styles.modal}>
          <div className={styles.modalPhoto}>
            <Image src={photo.src} />
          </div>
          <div className={styles.modalInfo}>
            <div className={styles.action}>
              {showBtnDelete ? (
                <button className={styles.btnDelete} onClick={handleDelete}>
                  Deletar
                </button>
              ) : (
                <NavLink
                  to={`/perfil/${photo.author}`}
                  end
                  className={styles.author}
                >
                  @{photo.author}
                </NavLink>
              )}
              <span className={styles.access}>{photo.acessos}</span>
            </div>
            <div className={`title-1 ${styles.modalDogName}`}>
              {photo.title}
            </div>
            <div className={styles.modalDogInfo}>
              <span>| {photo.peso}</span>
              <span>
                | {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
              </span>
            </div>
          </div>
          <div className={styles.modalComents}>
            <ul>
              {photo.comments.map((comment) => (
                <li key={comment.comment_ID}>
                  <span className={styles.modalComentUser}>
                    {comment.comment_author}:
                  </span>
                  {comment.comment_content}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.modalFormComents}>
            <form>
              <textarea
                className="input"
                type="textarea"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              ></textarea>
              <button
                type="submit"
                className={styles.buttonSend}
                onClick={handleSubmit}
              >
                <SendSvg />
              </button>
            </form>
            {error && (
              <span className={styles.error}>Ocorreu um erro insperado...</span>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PhotoModal;
