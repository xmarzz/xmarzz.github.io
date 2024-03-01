import React from "react";
import "./myWork.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";


const myWork = () => {
  const projects = {
    "Face 2 Face": {
      title: "Face 2 Face",
      desc: "A web application designed to be mobile-friendly, tailored specifically to a local salon.",
      link: "https://github.com/xmarzz/Face2Face",
      open: "https://face2-face.vercel.app/",
      techstack: "Next.js, Tailwind css, Typescript",
    },
    Artwork: {
      title: "Artwork web page",
      desc: "A platform where users can upload photos of their drawings or artworks on one page, music on the other.",
      techstack: "Next.js, Cloudinary(backend), Auth 2.0",
      link: "https://github.com/xmarzz/artWork",
    },
    "Hiro Bot": {
      title: "Hiro Telegram Bot",
      desc: "A bot to help you work and break, excel at your daily tasks.",
      link: "https://github.com/xmarzz/Hiro-bot",
      techstack: "Javascript, Node.js, Telegram API",
    },
    "web Srcapper": {
      title: "web scrapper",
      desc: " The scraper is designed to navigate through a list of specified websites, extract relevant text and titles.",
      link: "https://github.com/xmarzz/web-scrapper",
      techstack: "Python, pip(package manager), virtualenv",
    },
    "Portfolio Page": {
      title: "Portfolio Page",
      desc: "A straightforward, responsive, and distinctive portfolio page",
      link: "https://github.com/xmarzz/xmarzz.github.io",
      techstack: "React.js, Javascript",
    },
    "password manager": {
      title: "Password manager",
      desc: "A secure and user-friendly password management application built with Python. It utilizes SQLite3 as its database to store user credentials securely.",
      link: "https://github.com/xmarzz/password_manager",
      techstack: "Python, pip(package manager), SQLite3",
    },
  };

  return (
    <div className="myWork">
      <h1 className="myWork_title">/ software creation</h1>
      <div className="myWork_line">
        <hr />
      </div>
      <div className="projectsContainer">
        {Object.entries(projects).map(([key, project]) => (
          <div key={key} className="projectCard">
            <div className="projectCard_top">
              <div className="projectCard_folder">
                {" "}
                <IoFolderOutline size={36} />
              </div>

              <div className="projectCard_top-right">
                <div
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.open(project.link)}
                  className="projectCard_icon"
                >
                  <FaGithub size={26} className="github_icon"/>
                </div>

                {project.open && (
                  <div
                    href={project.open}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.open(project.open)}
                    className="projectCard_page"
                  >
                    {" "}
                    <MdOutlineDriveFolderUpload size={30} className="projectCard_page-icon"/>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="projectCard_bottom">
                <h2 className="projectCard_title">{project.title}</h2>
                <p className="projectCard_desc">{project.desc}</p>
                <p className="projectCard_tech">{project.techstack}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default myWork;
