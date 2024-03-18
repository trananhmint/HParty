import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();
  // if (user.role === "Admin") {
  //   return <Navigate to="/admin" />;
  // }
  // if (user.role === "Party Host") {
  //   return <Navigate to="/host" />;
  // }
  return <Outlet />;
};

export default PrivateRoute;