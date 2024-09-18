import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

type Props = {};

const Contact = (props: Props) => {
  const [textColor, setTextColor] = useState("red");
  const imageLoader = (img: string) => {
    return "/Assets/image/about.svg";
  };
  return (
    <div style={{ marginTop: "14%" }}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className={styles.contact_main}>
            <div className={styles.content}>
              <h2 className={"mb-3"} style={{ fontSize: "45px" }}>
                Lets Contact ! 📱
              </h2>
              <h1 style={{ color: "#c000ff", fontSize: "60px" }}>
                VIVEK SINGH
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
            {/* ------------------------------------------- */}
            <div className="find_me">
              <div className="mt-4">
                <h4 className="">
                  Say me <span className={styles.span_color}> Hello !!</span>
                  👋🏻At
                </h4>
              </div>
              <div className="d-flex mt-3 icons">
                <div className={"contact_icon"}>
                  <Link
                    className={"link"}
                    href="https://www.instagram.com/vivek__singh"
                  >
                    <FaInstagram />
                  </Link>
                </div>
                <div className={"contact_icon"}>
                  <Link
                    className={"link"}
                    href="https://www.linkedin.com/in/vivek-singh-baghel-62346a215"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className={styles.about_img}>
            <Image
              loader={() => imageLoader("")}
              src={`/Assets/image/about.svg`}
              width={100}
              height={200}
              style={{ width: "100%", height: "350px" }}
              alt="Loading"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
