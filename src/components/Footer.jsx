import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com"
      
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/",
    },
    {
      id: 3,
      child: (
        <>
          <BsInstagram size={30} />
        </>
      ),
      href: "https://instagram.com",
    },
    {
      id: 4,
      child: (
        <>
          <FaXTwitter size={30} />
        </>
      ),
      href: "https://x.com",
     
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-fit py-8 flex justify-between items-center flex-col md:flex-row px-8">
      <div className="mb-2 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-semibold"><a href="/">Femi.Dev</a></h2>
      </div>
      <div className="mb-2 md:mb-0">
        <p>Copyright © 2023 | All rights are reserved</p>
      </div>
      <div>
        <ul className="flex justify-between items-center">
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="ml-4 hover:scale-105 duration-300"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
             
            >
              {child}
            </a>
          </li>
        ))}
        </ul>
      </div>
      
     
          
    </div>
    
  );
};

export default Footer;
