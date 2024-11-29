import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";

const ProtectedPage = () => {
  const token = localStorage.getItem("token");
  return token ? <Dashboard /> : <Navigate to="/login" />;
};

export default ProtectedPage;
