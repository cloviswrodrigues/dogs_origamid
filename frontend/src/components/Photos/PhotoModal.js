import React from "react";
import styles from "./PhotoModal.module.css";

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
            <span>| 2kg</span>
            <span>| 2 anos</span>
          </div>
        </div>

        <div className={styles.modalComents}></div>
        <div className={styles.modalFormComents}></div>
      </div>
    </div>
  );
};

export default PhotoModal;
