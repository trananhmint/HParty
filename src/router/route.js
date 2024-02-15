import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  // if (!user.token) return <Navigate to="/signup" />;
  return <Outlet />;
};

export default PrivateRoute;