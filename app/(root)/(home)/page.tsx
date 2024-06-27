"use client";
import React from "react";

import { Header, Footer } from "@/components/";
import "./home.css";
// import { photo } from "../../../assets/image/IMG_7832.JPG";

const page = () => {
  const [mouseActive, setMouseActive] = React.useState(true);

  const handleMouseToggler = () => {
    const changerClassActive = document.getElementById("stack");
    setMouseActive(!mouseActive);

    if (mouseActive) {
      changerClassActive?.classList.toggle("active");
    } else {
      changerClassActive?.classList.toggle("active");
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="inner flex items-center justify-between">
        <div className="section cursor-default my-5">
          <h1 className="title-name">
            Matkerimov Eldos{" "}
            <span className="title-second_name">Almaz uulu Eldos</span>
          </h1>
          <p
            className="title-stack"
            id="stack"
            onMouseOver={handleMouseToggler}
            onMouseOut={handleMouseToggler}
          >
            {mouseActive
              ? "I`m Front - End Developer"
              : "Next, React, HTML/CSS, Junior developer <3"}
          </p>
        </div>
        <div className="section">
          <div className="my-photo">
            <img src="./assets/image/IMG_7832.JPG" alt="my_photo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
