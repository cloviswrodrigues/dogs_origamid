import React from "react";

import styles from "./PhotoList.module.css";
import { PHOTOS_GET } from "../../Api";

import Image from "../../Helper/Image";
import Loader from "../Loader";
import PhotoModal from "./PhotoModal";

const TOTAL_PHOTO = 6;

const PhotoList = ({ page, user, setInfinite, setWait }) => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);

  function openPhotoModal(idPhoto) {
    setIdPhoto(idPhoto);
    setShowModal(true);
  }

  function deletePhotoList(idPhoto) {
    console.log("aeeeeeeeeeeeeeeeeeeeeeee");
    setPhotos((prevState) => prevState.filter((photo) => photo.id !== idPhoto));
  }

  React.useEffect(() => {
    async function getAccountPhotos() {
      const total = TOTAL_PHOTO;
      try {
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
        setTimeout(() => {
          setWait(false);
        }, 500);
      }
    }

    getAccountPhotos();
  }, [page, user, setInfinite, setWait]);

  if (loading) return <Loader />;
  return (
    <>
      {photos &&
        photos.map((photo) => (
          <div
            key={photo.id}
            className={styles.gridItem}
            onClick={() => openPhotoModal(photo.id)}
          >
            <Image src={photo.src} />
            <span className={styles.gridItemAcess}>{photo.acessos}</span>
          </div>
        ))}
      {!photos & (page === 1) ? (
        <div>
          <p>Não há nenhumm foto para ser exibida...</p>
        </div>
      ) : null}
      {showModal && (
        <PhotoModal
          idPhoto={idPhoto}
          setShowModal={setShowModal}
          deletePhotoList={deletePhotoList}
        />
      )}
    </>
  );
};

export default PhotoList;
