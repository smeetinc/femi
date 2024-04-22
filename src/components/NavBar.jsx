import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "stack",
    },
    {
      id: 4,
      link: "contact",
    },
  ];
  return (
    <header className="px-4 shadow py-4 fixed w-full z-50 bg-white h-fit">
      <nav className="flex justify-between items-center">
        <Link to={links[0].link} smooth duration={500}>
          <h1 className="font-bold text-sm lg:text-lg cursor-pointer">
            RaphaelAkinnigbagbe.com
          </h1>
        </Link>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-lg ml-4 cursor-pointer hover:scale-105 duration-200 text-gray-600 capitalize"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setMenu(!menu)}
          className="cursor-pointer mr-2 md:hidden"
        >
          {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      {menu && (
        <ul className="flex flex-col border-0 md:hidden absolute top-15 right-0 w-full shadow px-4 bg-white capitalize">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-center text-lg my-4 mr-4 cursor-pointer hover:scale-105 duration-200 text-gray-600"
            >
              <Link
                onClick={() => setMenu(!menu)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
