import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (!tokenString) return null;
    try {
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    } catch (e) {
      console.error("Failed to parse token from sessionStorage:", e);
      return null;
    }
  };

  const [token, setTokenState] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setTokenState(userToken.token);
  };

  const clearToken = () => {
    sessionStorage.removeItem("token");
    setTokenState(null);
  };

  return {
    setToken: saveToken,
    clearToken,
    token,
  };
}
