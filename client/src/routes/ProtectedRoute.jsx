import { Navigate } from "react-router-dom";
import { getStoredToken } from "../services/authStorage";

function ProtectedRoute({ children }) {
  const token = getStoredToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
