"use client";
import React from "react";

interface NavigationItem {
  link: string;
  text: string;
}

const navigationList: NavigationItem[] = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about",
    text: "About",
  },
];

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center">
        <nav className="flex gap-5 cursor-default">
          {navigationList.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="uppercase cursor-default hover:text-blue-500"
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
