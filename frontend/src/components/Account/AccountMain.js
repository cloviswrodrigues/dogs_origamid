import React, { useContext } from "react";
import Feed from "../Feed/Feed";
import { UserContext } from "../../Context/UserContext";

const AccountMain = ({ setPageTitle }) => {
  const [user, setUser] = React.useState(null);
  const { data } = useContext(UserContext);
  console.log("account main");
  console.log("user: ", user);

  React.useEffect(() => {
    setUser(data);
  }, [data]);

  React.useEffect(() => {
    setPageTitle("Minha Conta");
  }, []);

  if (!user) return null;
  return <Feed user={user.id} />;
};

export default AccountMain;
