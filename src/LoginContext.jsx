import { createContext, useContext, useState, useEffect } from "react";
import useToken from "./utlis/useToken";
import { toast } from "react-toastify";

const LoginContext = createContext();
const UpdateLoginContext = createContext();

export const LoginStatus = () => {
  return useContext(LoginContext);
};

export const UpdateLoginStatus = () => {
  return useContext(UpdateLoginContext);
};

const LoginProvider = ({ children }) => {
  const { setToken, clearToken, token } = useToken();
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const logIn = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    clearToken();
    setIsLoggedIn(false);
    toast.success("Logged Out");
  };

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <UpdateLoginContext.Provider value={{ logIn, logOut }}>
        {children}
      </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  );
};

export default LoginProvider;
