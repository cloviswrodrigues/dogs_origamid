import React from "react";

const AccountStatistics = ({ setPageTitle }) => {
  React.useEffect(() => {
    setPageTitle("Estatísticas");
  }, []);
  return <div>conta estatisticas</div>;
};

export default AccountStatistics;
