import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsEmojiHeartEyes } from "react-icons/bs";
import Femi from "../assets/Raphael_Akinnigbagbe.docx";

import "./blob.css";
import { Link } from "react-scroll";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Developer", "Tester"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div name="home" className="bg-slate-100 h-fit md:h-screen md:pt-10 w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-between items-center md:flex-row py-20">
        <div className="lg:mx-10 px-4 md:max-w-50 my-auto">
          <p>Hello, I'm</p>
          <h1 className="font-bold text-4xl">Oluwafemi Akinnigbagbe</h1>
          <h3 className="font-bold text-2xl">A Software {typeEffect}</h3>
          <p className="">
            With 10+ years experience and trusted by leading companies for
            flawless solutions.
          </p>
          <div className="my-4 flex">
            <a href={Femi} download={true}>
              <button className="group w-fit py-3 px-6 my-2 shadow bg-gray-800 text-white rounded-md flex items-center cursor-pointer">
                View Resume
                <span className="group-hover:rotate-90 duration-300 ml-1">
                  <BsEmojiHeartEyes size={25} />
                </span>
              </button>
            </a>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group border-gray-600 border-2 ml-2 px-6 py-3 w-fit my-2 shadow rounded-md flex items-center cursor-pointer"
            >
              Hire me
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <RiSendPlaneLine size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div
          className="px-auto max-w-md
        "
        >
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
