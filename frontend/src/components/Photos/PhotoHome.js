import React from "react";

import styles from "./PhotoHome.module.css";
import PhotoGrid from "./PhotoGrid";
import PhotoModal from "./PhotoModal";

const Home = () => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);

  function openPhotoModal(idPhoto) {
    console.log("open modal");
    setIdPhoto(idPhoto);
    setShowModal(true);
  }

  React.useEffect(() => {
    let wait = false;
    function infiteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiteScroll);
    window.addEventListener("scroll", infiteScroll);

    return () => {
      window.removeEventListener("wheel", infiteScroll);
      window.removeEventListener("scroll", infiteScroll);
    };
  }, [infinite]);

  return (
    <main className={` ${styles.photoHome}`}>
      <div className="container">
        {pages.map((page) => (
          <PhotoGrid
            page={page}
            setInfinite={setInfinite}
            openPhotoModal={openPhotoModal}
          />
        ))}
        {!infinite && <p>Não existem mais postagens.</p>}
      </div>
      {showModal && (
        <PhotoModal idPhoto={idPhoto} setShowModal={setShowModal} />
      )}
    </main>
  );
};

export default Home;
