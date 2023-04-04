import React from "react";

import Loader from "../../components/Loader";
import PhotoGrid from "./PhotoGrid";
import { PHOTOS_GET } from "../../Api";

import styles from "./PhotoHome.module.css";

const Home = () => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getAccountPhotos() {
    const page = 1;
    const total = 6;

    try {
      setPhotos(null);
      const { url, options } = PHOTOS_GET({ page, total });
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
    getAccountPhotos();
  }, []);

  return (
    <main className={` ${styles.photoHome}`}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <PhotoGrid photos={photos} />
        </div>
      )}
    </main>
  );
};

export default Home;
