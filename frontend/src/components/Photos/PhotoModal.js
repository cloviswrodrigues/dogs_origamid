import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./PhotoModal.module.css";
import { ReactComponent as SendSvg } from "../../assets/enviar.svg";
import { PHOTO_GET, COMMENT_POST, PHOTO_DELETE } from "../../Api";
import Loader from "../Loader";
import { UserContext } from "../../Context/UserContext";
import Image from "../../Helper/Image";
import { createPortal } from "react-dom";

const PhotoModal = ({ idPhoto, setShowModal, deletePhotoList }) => {
  const [photo, setPhoto] = React.useState(null);
  const [comment, setComment] = React.useState("");
  const [error, setError] = React.useState(false);
  const [showBtnDelete, setShowBtnDelete] = React.useState(false);
  const { data: userdata, login } = React.useContext(UserContext);
  const [showConfirmDeletion, setShowConfirmDeletion] = React.useState(false);
  const [disabledButtonDeletion, setDisabledButtonDeletion] =
    React.useState(false);

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
    setShowConfirmDeletion(true);
  }

  function noConfirmDelete() {
    setShowConfirmDeletion(false);
  }

  async function confirmDelete() {
    setDisabledButtonDeletion(true);
    const { url, options } = PHOTO_DELETE(idPhoto);
    const response = await fetch(url, options);
    if (response.ok) {
      setShowModal(false);
      deletePhotoList(idPhoto);
    }

    setDisabledButtonDeletion(false);
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

  return createPortal(
    <div className={styles.modalBackground} onClick={handleModal}>
      {photo ? (
        <div className={styles.modal}>
          {showConfirmDeletion && (
            <div className={styles.modalAlert}>
              <div className={styles.confirmDelete}>
                <div>Tem certeza que deseja deletar ?</div>
                <button
                  className="btn btn-medium"
                  onClick={confirmDelete}
                  disabled={disabledButtonDeletion}
                >
                  Sim
                </button>
                <button
                  className={styles.noDelete}
                  onClick={noConfirmDelete}
                  disabled={disabledButtonDeletion}
                >
                  Não
                </button>
              </div>
            </div>
          )}
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
            <div className={styles.modalDog}>
              <div className={`title-1 ${styles.modalDogName}`}>
                {photo.title}
              </div>
              <div className={styles.modalDogInfo}>
                <span>| {photo.peso} kg </span>{" "}
                <span>
                  | {photo.idade} {photo.idade > 1 ? "anos" : "ano"}
                </span>
              </div>
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
            {login && (
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
            )}
            {error && (
              <span className={styles.error}>Ocorreu um erro insperado...</span>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>,
    document.getElementById("modal-root")
  );
};

export default PhotoModal;
