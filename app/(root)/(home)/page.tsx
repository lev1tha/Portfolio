"use client";
import React from "react";

import "./home.css";

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
    <div className="inner flex items-center justify-between">
      <div className="section cursor-default my-5">
        <h1 className="title-name">Matkerimov Eldos</h1>
        <p
          className="title-stack"
          id="stack"
          onMouseOver={handleMouseToggler}
          onMouseOut={handleMouseToggler}
        >
          {mouseActive
            ? "I`m Front - End Developer"
            : "Next, React, HTML/CSS, JS Junior developer <3"}
        </p>
      </div>
      <div className="section">
        <div className="my-photo">
          <img src="./assets/image/suroteken.png" alt="my_photo" />
        </div>
      </div>
    </div>
  );
};

export default page;
