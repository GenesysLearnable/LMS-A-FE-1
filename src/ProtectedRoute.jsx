import { Navigate, useLocation } from "react-router-dom";
import { LoginStatus } from "./LoginContext";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = LoginStatus();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
