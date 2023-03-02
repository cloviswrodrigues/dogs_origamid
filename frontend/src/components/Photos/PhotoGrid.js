import React from "react";

const PhotoGrid = ({ photos }) => {
  console.log("phts: ", photos);
  return <div className="container">{photos[0].src}</div>;
};

export default PhotoGrid;
