import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../useContext";

const Navbar = () => {
  const { logout, setLogout } = useGlobalContext();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setLogout(false);
  };
  if (useLocation().pathname == "/login") {
    return <h1></h1>;
  }
  return (
    <div>
      <nav>
        <div className="manage">
          <Link to={"/manageform"}>Customize</Link>
        </div>
        <div className="login">
          <Link to={"/register"}>Form</Link>
        </div>
        <div className="master">
          <Link to={"/"}>Master Page</Link>
        </div>
        <div className="login" onClick={handleLogout}>
          <Link to={"/login"}>logout</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
