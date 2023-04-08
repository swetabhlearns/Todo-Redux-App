import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { Component } = props;
  const user = useSelector((state) => state.auth.loggedInUser);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
