import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Master = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="master-page">Master Page</div>
    </div>
  );
};

export default Master;
