import React from "react";
import styles from "./PhotoGrid.module.css";
import PhotoModal from "./PhotoModal";

import Image from "../../Helper/Image";

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
              <div key={photo.id} className={styles.gridItem}>
                <Image
                  onClick={() => openPhotoModal(photo.id)}
                  src={photo.src}
                />
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
