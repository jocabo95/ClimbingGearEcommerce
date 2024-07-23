import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [isLogged, setIsLogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );

  let handleLoginAuth = (userData) => {
    setUser(userData);
    setIsLogged(true);

    localStorage.setItem("isLogged", JSON.stringify(true));
    localStorage.setItem("user", JSON.stringify(userData));
  };

  let handleLogoutAuth = () => {
    setUser({});
    setIsLogged(false);

    localStorage.removeItem("user");
    localStorage.removeItem("isLogged");
  };

  const data = { handleLoginAuth, handleLogoutAuth, user, isLogged };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
