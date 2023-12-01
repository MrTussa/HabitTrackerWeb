import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(true);
  }, [localStorage.getItem("jwtToken")]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
