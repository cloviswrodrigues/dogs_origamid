import React from "react";

import styles from "./Feed.module.css";
import PhotoList from "../Photos/PhotoList";

const Feed = ({ user }) => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);
  const [wait, setWait] = React.useState(false);

  React.useEffect(() => {
    function infiteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          setWait(true);
        }
      }
    }
    window.addEventListener("wheel", infiteScroll);
    window.addEventListener("scroll", infiteScroll);

    return () => {
      window.removeEventListener("wheel", infiteScroll);
      window.removeEventListener("scroll", infiteScroll);
    };
  }, [infinite, wait]);

  return (
    <section className={` ${styles.photoHome}`}>
      <div className={`container ${styles.grid}`}>
        {pages.map((page) => (
          <PhotoList
            key={page}
            page={page}
            user={user}
            setInfinite={setInfinite}
            setWait={setWait}
          />
        ))}
        {!infinite & (pages.length > 1) ? (
          <div className={styles.noPosts}>Não existem mais postagens.</div>
        ) : null}
      </div>
    </section>
  );
};

export default Feed;
