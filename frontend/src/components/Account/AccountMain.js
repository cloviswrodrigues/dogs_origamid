import React from "react";

const AccountMain = ({ setPageTitle }) => {
  React.useEffect(() => {
    setPageTitle("Minha Conta");
  }, []);

  return <div>conta</div>;
};

export default AccountMain;
