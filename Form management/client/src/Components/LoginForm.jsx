import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../useContext";
import Slider from "../Components/Slider";
const LoginForm = () => {
  const { setLogout } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
      setLogout(true);
    }
  }, []);
  const randomString = Math.random().toString(36).slice(8);

  const [captcha, setCaptcha] = useState(randomString);
  const [userCaptcha, setUserCaptcha] = useState("");
  const [invalidCaptcha, setInvalidCaptcha] = useState(false);

  const [auth, setAuth] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha == userCaptcha) {
      if (auth.name !== "admin" || auth.password !== "pass") {
        console.log("invalid email and password");
      } else {
        navigate("/");
        localStorage.setItem("auth", true);
      }
    } else {
      setAuth({ name: "", password: "" });
      setUserCaptcha("");
      handleCaptcha();
      setInvalidCaptcha(true);
    }
  };

  const handleCaptcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    setCaptcha(randomString);
  };

  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login-form" onSubmit={handleSubmit}>
        <form action="">
          <div className="title">Login</div>
          <div className="email">
            <input
              type="text"
              placeholder="UserId"
              name="name"
              onChange={handleChange}
              value={auth.name}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={auth.password}
            />
          </div>
          <div className="captcha">
            <p>
              <span>{captcha}</span>
              <button onClick={handleCaptcha}>🔁</button>
            </p>
            <input
              style={invalidCaptcha ? { border: "2px solid red" } : {}}
              type="text"
              onChange={(e) => setUserCaptcha(e.target.value)}
              value={userCaptcha}
              className="captcha-input"
            />
            {invalidCaptcha ? (
              <div style={{ textAlign: "center", color: "white" }}>
                Invalid Captcha
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
          <div className="register-link">
            <Link to={"/register"}>Register ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
