import React, { useContext } from "react";
import Feed from "../Feed/Feed";
import { UserContext } from "../../Context/UserContext";
import Head from "../../Helper/Head";

const AccountMain = ({ setPageTitle }) => {
  const [user, setUser] = React.useState(null);
  const { data } = useContext(UserContext);

  React.useEffect(() => {
    setUser(data);
  }, [data]);

  React.useEffect(() => {
    setPageTitle("Minha Conta");
  }, []);

  if (!user) return null;
  return (
    <>
      <Head title="Minha Conta" />
      <Feed user={user.id} />
    </>
  );
};

export default AccountMain;
