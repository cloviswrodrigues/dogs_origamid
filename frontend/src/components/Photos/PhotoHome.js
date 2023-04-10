import React from "react";

import Loader from "../../components/Loader";
import PhotoGrid from "./PhotoGrid";
import { PHOTOS_GET } from "../../Api";

import styles from "./PhotoHome.module.css";

const TOTAL_PHOTO = 6;

const Home = () => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfite] = React.useState(true);

  async function getAccountPhotos(pageNumber) {
    const page = pageNumber;
    const total = TOTAL_PHOTO;

    try {
      const { url, options } = PHOTOS_GET({ page, total });
      const response = await fetch(url, options);
      const json = await response.json();
      const numberPhoto = json.length;
      if (numberPhoto) {
        setPhotos((photos) => [...photos, ...json]);
        if (numberPhoto < TOTAL_PHOTO) setInfite(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  function infiteScroll(e) {
    let wait = false;
    const scroll = window.scrollY;
    const height = document.body.offsetHeight - window.innerHeight;

    if (infinite) {
      if (scroll > height * 0.75 && !wait) {
        console.log("busca novas fotos");
        setPages((pages) => [...pages, pages.length + 1]);

        wait = true;
        setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }

  React.useEffect(() => {
    console.log("2 effect");
    const lastPage = pages.slice(-1);
    //getAccountPhotos(lastPage);
  }, [pages]);

  React.useEffect(() => {
    window.addEventListener("wheel", infiteScroll);
    window.addEventListener("scroll", infiteScroll);
    getAccountPhotos(1);

    return () => {
      window.removeEventListener("wheel", infiteScroll);
      window.removeEventListener("scroll", infiteScroll);
    };
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
