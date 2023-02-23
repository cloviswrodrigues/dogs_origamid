import React from "react";
import { TOKEN_POST, USER_GET } from "../Api";
import useFetch from "../Hooks/useFetch";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const { status, data, error, request } = useFetch();

  async function loginPost(username, password) {
    await request(TOKEN_POST({ username, password }));
    if (status === 200) {
      console.log("deu certoo! login post");
      getUser();
    } else {
      console.log("deu errado");
    }
  }

  function getUser() {
    request(USER_GET(token)).then(() => {
      setUser(data);
    });
  }

  return (
    <UserContext.Provider value={{ user, loginPost }}>
      {children}
    </UserContext.Provider>
  );
};
