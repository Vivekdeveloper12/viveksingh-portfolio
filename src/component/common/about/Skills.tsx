import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import styles from "../../../styles/About.module.css";
import { RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

type Props = {};

const skillsJson = [
  { icon: <FaHtml5 /> },
  { icon: <IoLogoCss3 /> },
  { icon: <TbBrandJavascript /> },
  { icon: <RiReactjsFill /> },
  { icon: <DiNodejs /> },
  { icon: <DiMongodb /> },
  { icon: <RiNextjsLine /> },
  { icon: <FaGitAlt /> },
  { icon: <FaBootstrap /> },
  { icon: <FaGithub /> },
];
const Skills = (props: Props) => {
  return (
    <div className="mt-5" id="skill">
      <h1 className="text-center mb-4">
        SKI<span style={{ color: "#c000ff" }}>LL</span>S
      </h1>

      <div className="row">
        {skillsJson.map((item: any) => {
          return (
            <div
              key={item.id} 
              data-aos="fade-down-right"
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              style={{ cursor: "pointer" }}
            >
              <div className="text-center">
                <div
                  className={"text-center"}
                  style={{
                    fontSize: "4rem", 
                    border: "1px solid #c000ff",
                    padding: "10px",
                  }}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ----------------------------------Tools-------------------------------- */}
    </div>
  );
};

export default Skills;
