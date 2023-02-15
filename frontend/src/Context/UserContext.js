import React from "react";
import { TOKEN_POST, USER_GET } from "../Api";
import useFetch from "../Hooks/useFetch";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const { data, error, request } = useFetch();

  function loginPost(username, password) {
    request(TOKEN_POST({ username, password })).then(() => {
      setToken(data.token);
      getUser();
    });
  }

  function getUser() {
    request(USER_GET(token)).then(() => {
      setUser(data);
      console.log("user: ", user);
    });
  }

  return (
    <UserContext.Provider value={{ user, loginPost }}>
      {children}
    </UserContext.Provider>
  );
};
