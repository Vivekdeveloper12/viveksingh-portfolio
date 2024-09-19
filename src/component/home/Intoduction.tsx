import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Intoduction = (props: Props) => {
  const imageLoader = (img: string) => {
    return "/Assets/image/about.svg";
  };
  return (
    <section id="introduction" className="container">
    <div className="intro_main">
      <div className="row align-items-center">
        {/* Left column: Introduction content */}
        <div className="col-lg-8 col-md-7 col-12">
          <div className={"mb-4 " + styles.content}>
            <h2 data-aos="fade-up" className="text-center">
              LET <span className={styles.span_color}>ME INTRODUCE</span> MYSELF
            </h2>
          </div>
          <div className={styles.intro_content}>
            <ul>
              <li>
                <p data-aos="fade-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  at dolores tenetur repudiandae
                </p>
              </li>
              <li>
                <p data-aos="fade-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  at dolores tenetur repudiandae
                </p>
              </li>
              <li>
                <p data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  at dolores tenetur repudiandae
                </p>
              </li>
              <li>
                <p data-aos="fade-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  at dolores tenetur repudiandae
                </p>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Right column: Image */}
        <div className="col-lg-4 col-md-5 col-12 text-center">
          <div className={styles.about_img}>
            <Image
              loader={() => imageLoader("")}
              src={`/Assets/image/about.svg`}
              width={220}
              height={350}
              style={{ width: "100%", height: "auto" }}
              alt="Loading"
            />
          </div>
        </div>
      </div>
  
      {/* Find Me section */}
      <div className="find_me mt-5">
        <h4 className="text-center">
          CONNECT WITH <span className={styles.span_color}>ME</span>
        </h4>
        <div className="d-flex justify-content-center mt-3 icons">
          <div className={styles.icon_1}>
            <Link className={styles.link} href="https://www.instagram.com/vivek__singh" target="_blank">
              <FaInstagram />
            </Link>
          </div>
          <div className={styles.icon_1}>
            <Link className={styles.link} href="https://www.linkedin.com/in/vivek-singh-baghel-62346a215" target="_blank">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Intoduction;
