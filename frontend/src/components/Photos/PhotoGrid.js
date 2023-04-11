import React from "react";

import styles from "./PhotoGrid.module.css";
import { PHOTOS_GET } from "../../Api";
import PhotoModal from "./PhotoModal";
import Image from "../../Helper/Image";
import Loader from "../Loader";

const TOTAL_PHOTO = 6;

const PhotoGrid = ({ page, setInfite }) => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);
  function openPhotoModal(idPhoto) {
    setIdPhoto(idPhoto);
    setShowModal(true);
  }

  async function getAccountPhotos() {
    const total = TOTAL_PHOTO;

    try {
      const { url, options } = PHOTOS_GET({ page, total });
      const response = await fetch(url, options);
      const json = await response.json();
      const numberPhoto = json.length;
      if (numberPhoto) {
        setPhotos([...json]);
        console.log("page ==========>", page);
        console.log("numberPhoto ==========>", numberPhoto);
        console.log("TOTAL_PHOTO ==========>", TOTAL_PHOTO);
        if (numberPhoto < TOTAL_PHOTO) {
          console.log("entrei no if");
          setInfite(false);
        }
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getAccountPhotos();
  }, []);

  if (loading) return <Loader />;
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
