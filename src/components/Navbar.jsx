import React from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { title } from "framer-motion/client";

const navbarLink = [
  {
    id: 1,
    title: "Buy Crypto",
    Link: "https://google.com",
    icon: "bi bi-shop",
  },
  {
    id:2,
    title: "LeardBoard",
    Link: "",
    icon: "bi bi-measuring-cup",
  }
];

function Navbar() {
  return (
    <div className="w-full  rounded-b-lg bg-opacity-50 backdrop-blur-md z-50 transition-all duration-300 px-4 py-6 flex items-center">
      <img src={Logo} alt="Logo-Eth" className="w-[110px] mr-8" />
      <ul className="flex space-x-5 flex-1">
        {navbarLink.map((link) => (
          <li key={link.id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white sm:text-lg text-sm hover:text-sky-100"
              href={link.Link}
            >
              <i
                className={`${link.icon} text-white mr-2 `}
              ></i>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <Button />
    </div>
  );
}

export default Navbar;
