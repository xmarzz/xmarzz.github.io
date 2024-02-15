import React from "react";
import "./About.css";
import { IoMdArrowDropright } from "react-icons/io";

const About = () => {
  const skills = [
    "Javascript ES6+",
    "Typescript",
    "React.js",
    "C",
    "Java",
    "Python",
  ];

  return (
    <div className="about">
      <div className="about-outside">
        <div className="about_inside">
          / about me{" "}
          <div className="about-line">
            <hr />
          </div>
        </div>
        <div className="about_details">
          I've always sought out opportunities and challenges that are meaninful
          to me. although my professional path has taken many twists and turns.
          i'm currently based in india.
        </div>
        <div className="about_tech">I'm familiar working with:</div>

        <ul className="about_lists">
          {skills.map((skill) => (
            <div className="about_skills">
              <div className="about_arrow">
                <IoMdArrowDropright size={22} width={10} height={12} />
              </div>
              <div className="about_skills-names"> {skill} </div>
            </div>
          ))}
        </ul>

        <div className="about_actualMe">
          When i'm not working, i enjoy immersing myself in the world of
          science, keeping up with latest advancements. i have a voracious
          appetite for reading and delve into a wide range of topics.
          additionally, i enjoy in playing variety of games as a way to
          unwind and have fun.
        </div>
      </div>
      <div className="about-photo">
        <img src="/boyThink.jpg" alt="My Profile Picture" sizes="450" width={300} height={300}/>
      </div>
    </div>
  );
};

export default About;
