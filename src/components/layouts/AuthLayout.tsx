import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const AuthPage = () => {
    return (
      <div>
        <Outlet />
      </div>
    );
  };

  return localStorage.getItem("personID") ? (
    <AuthPage />
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};

export default AuthLayout;
