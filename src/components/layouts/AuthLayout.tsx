import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../organisms/Navbar";

const AuthLayout = () => {
  const AuthPage = () => {
    return (
      <div>
        <Navbar />
        <div className="mt-24">
          <Outlet />
        </div>
      </div>
    );
  };

  return localStorage.getItem("personEmail") ? (
    <AuthPage />
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};

export default AuthLayout;
