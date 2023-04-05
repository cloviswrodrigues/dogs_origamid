import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import PhotoGrid from "./PhotoGrid";
import { PHOTOS_GET } from "../../Api";

import styles from "./PhotoProfile.module.css";

const PhotoProfile = () => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { user } = useParams();

  async function getPhotosByUser() {
    const page = 1;
    const total = 6;
    const userProfile = user;

    try {
      setPhotos(null);
      const { url, options } = PHOTOS_GET({ page, total, user: userProfile });
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.length) {
        setPhotos(json);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getPhotosByUser();
  }, []);

  return (
    <main className={` ${styles.photoHome}`}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1 className={`title-1 ${styles.title}`}>{user}</h1>
          <PhotoGrid photos={photos} />
        </div>
      )}
    </main>
  );
};

export default PhotoProfile;
