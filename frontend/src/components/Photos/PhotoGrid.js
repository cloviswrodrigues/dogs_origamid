import React from "react";
import styles from "./PhotoGrid.module.css";
import PhotoModal from "./PhotoModal";

const PhotoGrid = ({ photos }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);
  function openPhotoModal(idPhoto) {
    setIdPhoto(idPhoto);
    setShowModal(true);
  }
  return (
    <>
      <section className={`animeLeft ${styles.photoGrid}`}>
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
      {showModal && (
        <PhotoModal idPhoto={idPhoto} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default PhotoGrid;
