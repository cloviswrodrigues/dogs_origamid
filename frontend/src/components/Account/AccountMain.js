import React from "react";
import { PHOTOS_GET } from "../../Api";
import PhotoGrid from "../Photos/PhotoGrid";

const AccountMain = ({ setPageTitle }) => {
  const [photos, setPhotos] = React.useState(null);

  async function getAccountPhotos() {
    const page = 1;
    const total = 6;
    const user = 15;

    try {
      setPhotos(null);
      const { url, options } = PHOTOS_GET({ page, total, user });
      console.log("url2 ", url);
      console.log("options ", options);
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.length) {
        setPhotos(json);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  React.useEffect(() => {
    setPageTitle("Minha Conta");
    getAccountPhotos();
  }, []);

  return <PhotoGrid photos={photos} />;
};

export default AccountMain;
