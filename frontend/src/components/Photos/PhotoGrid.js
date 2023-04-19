import React from "react";

import styles from "./PhotoGrid.module.css";
import { PHOTOS_GET } from "../../Api";

import Image from "../../Helper/Image";
import Loader from "../Loader";

const TOTAL_PHOTO = 6;

const PhotoGrid = ({ page, user, setInfinite, openPhotoModal }) => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getAccountPhotos() {
    const total = TOTAL_PHOTO;
    try {
      console.log("to aqui");
      const { url, options } = PHOTOS_GET({ page, total, user });
      const response = await fetch(url, options);
      const json = await response.json();
      const numberPhoto = json.length;
      if (numberPhoto) {
        setPhotos([...json]);
      }
      if (numberPhoto < TOTAL_PHOTO) setInfinite(false);
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
    <section className={styles.photoGrid}>
      {photos && (
        <div className={styles.grid}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={styles.gridItem}
              onClick={() => openPhotoModal(photo.id)}
            >
              <Image src={photo.src} />
              <span className={styles.gridItemAcess}>{photo.acessos}</span>
            </div>
          ))}
        </div>
      )}
      {!photos & (page == 1) ? (
        <p>Não há nenhumm foto para ser exibida...</p>
      ) : null}
    </section>
  );
};

export default PhotoGrid;
