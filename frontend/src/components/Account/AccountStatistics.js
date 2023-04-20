import React from "react";
import Head from "../../Helper/Head";

const AccountStatistics = ({ setPageTitle }) => {
  React.useEffect(() => {
    setPageTitle("Estatísticas");
  }, []);
  return (
    <div>
      <Head title="Estatísticas" />
      conta estatisticas
    </div>
  );
};

export default AccountStatistics;
