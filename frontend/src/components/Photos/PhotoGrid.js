import React from "react";
import styles from "./PhotoGrid.module.css";

const PhotoGrid = ({ photos }) => {
  console.log("photo:", photos[0]);
  return (
    <section className={styles.photoGrid}>
      {photos ? (
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div
              className={styles.gridItem}
              style={{ backgroundImage: `url(${photo.src})` }}
            >
              <span className={styles.gridItemAcess}>{photo.acessos}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há nenhumm foto para ser exibida...</p>
      )}
    </section>
  );
};

export default PhotoGrid;
