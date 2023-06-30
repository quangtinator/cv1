import React from "react";
import "./Projects.css";
import { FaReact, FaDocker } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different push_down">Projects 🧪</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <a
              href="https://oer-cycle.elearn.rwth-aachen.de/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/XW7NTxR/oer.png"
                      alt="OER Game"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>OutdOER</h2>
                  <p>
                    OutdOER is a digital game for learning about Open Educational Ressources.
                  </p>
                  <div>
                    <SiHtml5 />
                    <DiCss3 />
                    <IoLogoJavascript />
                    <FaReact />
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    <FaDocker />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
