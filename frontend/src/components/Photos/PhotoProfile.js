import React from "react";
import { useParams } from "react-router-dom";

import styles from "./PhotoProfile.module.css";
import Feed from "../Feed/Feed";
import Head from "../../Helper/Head";

const PhotoProfile = () => {
  const { user } = useParams();

  return (
    <main className={` ${styles.photoHome}`}>
      <Head title={user} />
      <div className="container">
        <h1 className={`title-1 ${styles.title}`}>{user}</h1>
        <Feed user={user} />
      </div>
    </main>
  );
};

export default PhotoProfile;
