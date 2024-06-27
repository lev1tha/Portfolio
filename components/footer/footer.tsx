"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

interface arraySocialT {
  link: string;
  icon: any;
  text: string;
}

const arraySocial: arraySocialT[] = [
  {
    link: "https://www.instagram.com/up1mep",
    icon: faInstagram,
    text: "instagram",
  },
  {
    link: "https://t.me/nu3de4",
    icon: faTelegram,
    text: "Telegram",
  },
  {
    link: "https://wa.me/+996556693157",
    icon: faWhatsapp,
    text: "Whats`App",
  },
  {
    link: "+996 556-69-31-57",
    icon: faPhone,
    text: "Number",
  },
  {
    link: "https://github.com/lev1tha",
    icon: faGithub,
    text: "Git Hub",
  },
];

const Footer = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        {arraySocial.map((item, index) => (
          <a
            href={item.link}
            className="flex items-center gap-2 cursor-default"
          >
            <FontAwesomeIcon icon={item.icon} />
            <p>{item.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
