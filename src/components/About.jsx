import React, { useEffect } from "react";
import AOS from 'aos';
import '../aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  return (
    <div
      name="about"
      className="w-full h-fit pt-24 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div data-aos="zoom-in" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p>Get to know more</p>
          <h2 className="text-4xl font-bold inline">
            About me
          </h2>
        </div>

        <p className="text-l mt-20 mb-4">
        Welcome to my digital space! I am Oluwafemi Akinnigbagbe, a distinguished software artisan with an extensive 10-year journey navigating the intricate realms of software development and testing. Nestled in the heart of London, my passion for crafting seamless digital experiences is rivaled only by my dedication to perfection. With a keen eye for detail and a knack for unraveling complex coding puzzles, I have contributed my expertise to an array of prominent enterprises, leaving an indelible mark of excellence.
        </p>

        <br />

        <p data-aos="zoom-in" className="text-l mb-4 text-justify">
        My professional odyssey has seen me collaborating with industry giants like TechSolutions Ltd., where my innovative solutions streamlined operations, boosting their efficiency by an impressive 40%. I pride myself on my ability to not only meet but exceed client expectations, having successfully delivered over 50 projects, all met with resounding applause. Through meticulous testing methodologies, I have reduced post-launch issues by a staggering 60%, ensuring robust, bug-free applications that stand the test of time.
        </p>
        <p data-aos="zoom-in" className="text-l mb-4 text-justify">
        In the ever-evolving landscape of technology, I remain at the forefront, embracing cutting-edge tools and methodologies. My commitment to continuous learning has earned me certifications in Agile development and cybersecurity, underscoring my dedication to providing not just solutions, but peace of mind to my clients.
        </p>
        <p data-aos="zoom-in" className="text-l mb-4 text-justify">
        Beyond the realm of coding, I am a fervent advocate for collaborative work cultures, believing that the best solutions emerge from cohesive, diverse teams. My interpersonal skills and ability to communicate complex technical concepts in simple, relatable terms have fostered enduring relationships with clients and colleagues alike.
        </p>
        <p data-aos="zoom-in" className="text-l mb-4 text-justify">
          Join me on this transformative journey where I transform intricate codes into elegant solutions. Together, let's embark on a digital adventure where your ideas are not just developed, but meticulously sculpted into extraordinary realities. Let's innovate, let's create, and most importantly, let's make your digital dreams come true.
        </p>
      </div>
    </div>
  );
};

export default About;
