import React from "react";
import Head from "../../Helper/Head";
import { STATS_GET } from "../../Api";
import Loader from "../Loader";
//import PhotoStatsGraph from "../Photos/PhotoStatsGraphs";
const PhotoStatsGraph = React.lazy(() => import("../Photos/PhotoStatsGraphs"));

const AccountStatistics = ({ setPageTitle }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  async function getStats() {
    const { url, options } = STATS_GET();
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) {
      console.log("json: ", json);
      setData(json);
    }

    setLoading(false);
  }

  React.useEffect(() => {
    setPageTitle("Estatísticas");
    getStats();
  }, []);

  if (loading) return <Loader />;
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <PhotoStatsGraph data={data} />
    </React.Suspense>
  );
};

export default AccountStatistics;
