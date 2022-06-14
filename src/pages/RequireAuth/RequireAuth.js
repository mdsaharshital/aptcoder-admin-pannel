import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "./../../firebase.init";
import Loading from "./../../components/Loading/Loading";

const RequireAuth = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
