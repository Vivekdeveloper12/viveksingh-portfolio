import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.css";
import { MdLabelImportantOutline } from "react-icons/md";
import Skills from "@/component/common/about/Skills";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="about_main">
      <div className={`${styles.main} container`}>
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className={styles.content}>
              <h1 data-aos="fade-up" className="mb-4">
                ABOUT <strong style={{ color: "#c000ff" }}>ME</strong>
              </h1>
              <ul className="p-0">
                <li>
                  <p data-aos="fade-right">
                    <MdLabelImportantOutline className={styles.arrow_icon} />{" "}
                    Hi, I`m{" "}
                    <span style={{ color: "#c000ff" }}>Vivek Singh</span>, a
                    passionate front-end developer with 1.8 years of experience
                    in building dynamic and responsive web applications using
                    React.js.
                  </p>
                </li>
                <li>
                  <p data-aos="fade-right">
                    <MdLabelImportantOutline className={styles.arrow_icon} /> I
                    have a keen eye for detail and a drive to create seamless
                    user experiences.
                  </p>
                </li>
                <li>
                  <p data-aos="fade-left">
                    <MdLabelImportantOutline className={styles.arrow_icon} />{" "}
                    Alongside my expertise in front-end development, I have a
                    foundational understanding of backend development with
                    Node.js, allowing me to collaborate effectively on
                    full-stack projects.
                  </p>
                </li>
                <li>
                  <p data-aos="fade-left">
                    <MdLabelImportantOutline className={styles.arrow_icon} />{" "}
                    I`m always eager to learn new technologies and take on
                    challenging projects to further hone my skills.
                  </p>
                </li>
              </ul>
              <h4 className="text-center pt-4">
                Let`s create something amazing together! 🚀🚀
              </h4>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-flex justify-content-center">
            <div className="img">
              <Image
                loader={() => "Assets/image/about1.jpg"}
                src={"Assets/image/about1.jpg"}
                alt="Loading"
                width={500}
                height={400}
                style={{objectFit:"cover"}}
              />
            </div>
          </div>
        </div>

        {/* ----------------------------- */}
        <Skills />
      </div>
    </div>
  );
};

export default About;
