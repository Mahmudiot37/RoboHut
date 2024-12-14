import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Spinner from "../spinner/spinner";

const PrivateRoute = () => {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/auth/user-auth");
        setOk(res.data.ok);
      } catch (error) {
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setOk(false);
    }
  }, [auth?.token]);

  if (ok === null) return <Spinner />;

  return ok ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={location.pathname} />
  );
};

export default PrivateRoute;
