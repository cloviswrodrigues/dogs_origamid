import React from "react";

import PhotoGrid from "./PhotoGrid";

import styles from "./PhotoHome.module.css";

const Home = () => {
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfite] = React.useState(true);
  console.log("@pages: ", pages);
  console.log("@infinite: ", infinite);
  function infiteScroll(e) {
    let wait = false;
    if (infinite) {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

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
    window.addEventListener("wheel", infiteScroll);
    window.addEventListener("scroll", infiteScroll);

    return () => {
      window.removeEventListener("wheel", infiteScroll);
      window.removeEventListener("scroll", infiteScroll);
    };
  }, []);

  return (
    <main className={` ${styles.photoHome}`}>
      <div className="container">
        {pages.map((page) => (
          <PhotoGrid page={page} setInfite={setInfite} />
        ))}
      </div>
    </main>
  );
};

export default Home;
