import React, { useEffect } from "react";
import project from "../assets/portfolio/project.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";
import project4 from "../assets/portfolio/project4.png";
import project5 from "../assets/portfolio/project5.png";
import project6 from "../assets/portfolio/project6.png";
import AOS from 'aos';
import '../aos/dist/aos.css';

const Projects = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, [])
  const projects = [
    {
      id: 1,
      src: project,
      alt: "project one",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
    {
      id: 2,
      src: project2,
      alt: "project two",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
    {
      id: 3,
      src: project3,
      alt: "project three",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
    {
      id: 4,
      src: project4,
      alt: "project four",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
    {
      id: 5,
      src: project5,
      alt: "project five",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
    {
      id: 6,
      src: project6,
      alt: "project six",
      demo: "https://oluwaseyismithbayode.vercel.app/#projects",
      code: "https://github.com/smeetinc/ratedpleasure"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-slate-100 w-full h-fit pt-24 py-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div data-aos="zoom-in" className="pb-8 text-center">
        <p>Check out some of my recent</p>
          <h2 className="text-4xl font-bold inline">
            Projects
          </h2>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12">
          {projects.map(({ id, src, alt, demo, code }) => (
            <div data-aos="zoom-in" key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
                loading="lazy"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
