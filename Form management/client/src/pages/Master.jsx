import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import bgImage1 from "../Components/image1.jpg";
import bgImage2 from "../Components/image2.jpg";
import bgImage3 from "../Components/image3.jpg";
import styled from "styled-components";

const Master = () => {
  const location = useLocation();

  const images = [bgImage1, bgImage2, bgImage3];
  console.log(location.pathname);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, []);

  return <div></div>;
};

export default Master;
