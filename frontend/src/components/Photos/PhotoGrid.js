import React from "react";
import styles from "./PhotoGrid.module.css";
import PhotoModal from "./PhotoModal";

const PhotoGrid = ({ photos }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);
  function openPhotoModal(idPhoto) {
    setIdPhoto(idPhoto);
    setOpenModal(true);
  }
  return (
    <>
      <section className={styles.photoGrid}>
        {photos ? (
          <div className={styles.grid}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                className={styles.gridItem}
                style={{ backgroundImage: `url(${photo.src})` }}
                onClick={() => openPhotoModal(photo.id)}
              >
                <span className={styles.gridItemAcess}>{photo.acessos}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>Não há nenhumm foto para ser exibida...</p>
        )}
      </section>
      {openModal && <PhotoModal idPhoto={idPhoto} />}
    </>
  );
};

export default PhotoGrid;
