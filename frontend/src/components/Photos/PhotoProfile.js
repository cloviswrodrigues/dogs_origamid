import React from "react";
import { useParams } from "react-router-dom";

import styles from "./PhotoProfile.module.css";
import Feed from "../Feed/Feed";

const PhotoProfile = () => {
  const { user } = useParams();

  return (
    <main className={` ${styles.photoHome}`}>
      <div className="container">
        <h1 className={`title-1 ${styles.title}`}>{user}</h1>
        <Feed user={user} />
      </div>
    </main>
  );
};

export default PhotoProfile;
