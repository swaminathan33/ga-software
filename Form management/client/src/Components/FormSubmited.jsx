import React, { useEffect, useRef, useState, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../useContext";
const FormSubmited = ({ details }) => {
  const [userData, setUserData] = useState([]);
  const { vToken, submittedUser, setSubmittedUser } = useGlobalContext();
  const dataRef = useRef(userData);

  useEffect(() => {
    setUserData((data) => {
      return data;
    });
  }, [userData]);
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gettoken");
        setUserData(() => response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     const verifyData = () => {
  //       userData.map((item) => {
  //         if (item.gender == "male") {
  //           if (item.verificationtoken == token) {
  //             console.log("token correct");
  //           } else {
  //             console.log("token not correct");
  //           }
  //         }
  //       });
  //     };
  //     verifyData();
  //   }, [userData, token]);

  // const verify = (e) => {
  //   e.preventDefault();
  //   console.log("submited user inside verify function", submittedUser);
  //   console.log("user data inside verify function", userData);

  //   const user = userData.filter((item) => item.email == submittedUser);
  //   console.log(userData, submittedUser);
  //   console.log("user token", token, "item token", user.verificationtoken);
  //   if (user.verificationtoken == token) {
  //     console.log("correct");
  //   } else {
  //     console.log("Incorrect Token");
  //   }
  // };
  useEffect(() => {
    const user1 = dataRef.current;
    const user = [];
    user1.map((item) => console.log("a", item.email));
    console.log("filtered user", submittedUser, user);
    if (user.verificationtoken == token) {
      console.log("correct");
    } else {
      console.log("Incorrect Token", token, "real", user.verificationtoken);
    }
  }, [token]);
  // useEffect(() => {
  //   setSubmittedUser(submittedUser);
  // }, [submittedUser]);
  // console.log("form submitted", details);
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div className="form-submited-overlay">
        <div className="form-submited">
          <div className="title">
            We Sent a verification email to {submittedUser}
          </div>
          <Link to={"/login"} className="link">
            Login here
          </Link>
          {/* <form action="">
            <input type="text" onChange={(e) => setToken(e.target.value)} />
            <button type="submit">verify</button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default FormSubmited;
