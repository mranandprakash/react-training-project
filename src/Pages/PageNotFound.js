import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const { isLogged } = useSelector((state) => state.application);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      isLogged &&
      location.pathname !== "/mybooking" &&
      location.pathname !== "/home"
    ) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isLogged, navigate, location.pathname]);

  return <></>;
};

export default PageNotFound;
