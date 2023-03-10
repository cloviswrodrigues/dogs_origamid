import React from "react";

import styles from "./PhotoModal.module.css";
import { ReactComponent as SendSvg } from "../../assets/enviar.svg";

const PhotoModal = ({ idPhoto }) => {
  console.log("idPhoto: ", idPhoto);
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.modalPhoto}>
          <img
            src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"
            alt=""
          />
        </div>
        <div className={styles.modalInfo}>
          <div className={styles.action}>
            <button className={styles.btnDelete}>Deletar</button>
            <span className={styles.acess}>2</span>
          </div>
          <div className={`title-1 ${styles.modalDogName}`}>Jaja</div>
          <div className={styles.modalDogInfo}>
            <span>| 2 kg</span>
            <span>| 2 anos</span>
          </div>
        </div>
        <div className={styles.modalComents}>
          <ul>
            <li>
              <span className={styles.modalComentUser}>dog:</span>teste
            </li>
          </ul>
        </div>
        <div className={styles.modalFormComents}>
          <form>
            <textarea
              className="input"
              type="textarea"
              placeholder="Comente..."
            ></textarea>
            <button type="submit">
              <SendSvg />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
