import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

type Props = {};

const HomePage = (props: Props) => {
  const [textColor, setTextColor] = useState("red");
  return (
    <section id={styles.home}>
      <div className={styles.home_content}>
        <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className={styles.header_text}>
              <h1  style={{ fontSize: "60px", lineHeight: "80px" }}>
                I am <span style={{ color: "#c000ff" }}>Vivek Singh</span>
                <br />
                From Indore , India
              </h1>
            </div>
            <div className={styles.typewriter}>
              <p className="mt-4" style={{ fontSize: "25px" }}>
                <span style={{ color: textColor }}>
                  <TypeAnimation
                    sequence={[
                      "Software Developer",
                      2000,
                      () => setTextColor("#ff7800"),
                      "Web Developer",
                      3000,
                      () => setTextColor("#3cdb00"),
                    ]}
                    speed={25}
                    repeat={Infinity}
                  />
                </span>
              </p>
            </div>
          </div>
            <div className="col-lg-5 col-md-12 text-center mt-4 mt-lg-0">
              <div className="text-center">
            <Image
                loader={()=>'Assets/image/home.png'}
                src={`/Assets/image/home.png`}
                width={100}
                height={130}
                style={{width:"350px",height:"350px"}}
                alt="Loading"
              />
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
