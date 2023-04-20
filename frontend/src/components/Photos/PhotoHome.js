import React from "react";

import Feed from "../Feed/Feed";
import Head from "../../Helper/Head";

const Home = () => {
  return (
    <main style={{ padding: "3rem 0" }}>
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />
      <Feed />
    </main>
  );
};

export default Home;
