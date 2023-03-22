import React from "react";

import styles from "./PhotoModal.module.css";
import { ReactComponent as SendSvg } from "../../assets/enviar.svg";
import { PHOTO_GET } from "../../Api";
import Loader from "../Loader";

const PhotoModal = ({ idPhoto, setShowModal }) => {
  const [photo, setPhoto] = React.useState(null);

  function getPhoto() {
    const { url, options } = PHOTO_GET(idPhoto);
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setPhoto({ ...json.photo, comments: [...json.comments] });
      });
  }

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
          <div
            className={styles.modalPhoto}
            style={{
              background: `url('${photo.src}') no-repeat center`,
            }}
          ></div>
          <div className={styles.modalInfo}>
            <div className={styles.action}>
              <button className={styles.btnDelete}>Deletar</button>
              <span className={styles.acess}>{photo.acessos}</span>
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
              ></textarea>
              <button type="submit" className={styles.buttonSend}>
                <SendSvg />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PhotoModal;
