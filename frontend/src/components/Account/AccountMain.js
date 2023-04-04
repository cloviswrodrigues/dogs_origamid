import React from "react";
import { PHOTOS_GET } from "../../Api";
import Loader from "../Loader";
import PhotoGrid from "../Photos/PhotoGrid";

const AccountMain = ({ setPageTitle }) => {
  const [photos, setPhotos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  async function getAccountPhotos() {
    const page = 1;
    const total = 6;
    const user = 15;

    try {
      setPhotos(null);
      const { url, options } = PHOTOS_GET({ page, total, user });

      const response = await fetch(url, options);
      const json = await response.json();
      if (json.length) {
        setPhotos(json);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    setPageTitle("Minha Conta");
    getAccountPhotos();
  }, []);

  if (loading) return <Loader />;
  return <PhotoGrid photos={photos} />;
};

export default AccountMain;
