import React from "react";
import styles from "./PhotoGrid.module.css";

const PhotoGrid = ({ photos }) => {
  console.log("photos: ", photos);
  return (
    <section className={styles.photoGrid}>
      {photos ? (
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div style={{ backgroundImage: `url(${photo.src})` }}></div>
          ))}
        </div>
      ) : (
        <p>Não há nenhumm foto para ser exibida...</p>
      )}
    </section>
  );
};

export default PhotoGrid;
