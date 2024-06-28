"use client";

import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="cursor-default">
      <div className="title flex items-center">
        <h1 className="font-medium uppercase title-name">Full Name</h1>
        <h1 className="name uppercase font-medium">Matkerimov Eldos</h1>
      </div>
      <div className="education">
        <ul>
          <li>
            OshSU <span>bachelor</span>
          </li>
          <li>
            ilim-Osh <span>blue diploma</span>
          </li>
          <li>
            PROlab-Academy <span>Front-End Develop</span>
          </li>
        </ul>
        <h1 className="education-title">Education</h1>
      </div>
      <div className="skill">
        <h1>Skill</h1>
      </div>
      <div className="about-skill">
        <div className="hard-skill">
          <h1>Hard Skill</h1>
          <ul>
            <li>
              <span>NextJS</span> {""}
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li>
              <span>ReactJS</span> {""}
              <FontAwesomeIcon icon={faReact} />
            </li>
            <li>
              <span>JS</span> {""}
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li>
              <span>HTML/CSS</span> {""}
              <FontAwesomeIcon icon={faCode} />
            </li>
            <li>
              <span>WordPress</span> {""}
              <FontAwesomeIcon icon={faWordpress} />
            </li>
          </ul>
        </div>
        <div className="soft-skill">
          <h1>Soft Skill</h1>
          <ul>
            <li>cheerful</li>
            <li>positive</li>
            <li>ironic</li>
            <li>dyspeptic</li>
            <li>sociable</li>
            <li>supportive</li>
            <li>good at expressing an idea</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
