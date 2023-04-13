import React from "react";

import styles from "./Feed.module.css";
import PhotoGrid from "../Photos/PhotoGrid";
import PhotoModal from "../Photos/PhotoModal";

const Feed = ({ user }) => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [idPhoto, setIdPhoto] = React.useState(null);

  function openPhotoModal(idPhoto) {
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
    <section className={` ${styles.photoHome}`}>
      <div className="container">
        {pages.map((page) => (
          <PhotoGrid
            page={page}
            user={user}
            setInfinite={setInfinite}
            openPhotoModal={openPhotoModal}
          />
        ))}
        {!infinite & (pages.length > 1) ? (
          <p>Não existem mais postagens.</p>
        ) : null}
      </div>
      {showModal && (
        <PhotoModal idPhoto={idPhoto} setShowModal={setShowModal} />
      )}
    </section>
  );
};

export default Feed;
