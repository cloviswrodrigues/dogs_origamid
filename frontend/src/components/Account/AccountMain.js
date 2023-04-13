import React, { useContext } from "react";
import Feed from "../Feed/Feed";
import { UserContext } from "../../Context/UserContext";

const AccountMain = ({ setPageTitle }) => {
  const { data: user } = useContext(UserContext);
  console.log("user.id: ", user.id);
  React.useEffect(() => {
    setPageTitle("Minha Conta");
  }, []);

  return <Feed user={user.id} />;
};

export default AccountMain;
