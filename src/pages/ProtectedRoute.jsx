import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const { userToken } = useSelector((state) => state.auth);
  if (!userToken) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
}
