import React from "react";

import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={`container ${styles.pagenotfound}`}>
      <h1 className="title-1">Erro: 404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default PageNotFound;
