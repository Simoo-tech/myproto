import React from "react";
import resume from "./Salah.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import img1 from "../../assets/1.jpg";
import "./about.scss";
const About = () => {
  return (
    <>
      <div className="about mb-5">
        <h1 className="title mt-2 mt-md-5 ">
          About Me <span></span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 ">
              <img src={img1} alt="" />
            </div>
            <div className="col-12 col-md-7 text">
              <h2 className="col-12">Who am I ?</h2>
              <h3 className="col-12">
                I'm Salah Eldin, a visual UX/UI Designer and React Front-End
                Developer
              </h3>
              <div className="name col-12 col-xl-6">
                <span>Name:</span>
                <p>salah eldin mahmoud</p>
              </div>
              <div className="age col-12 col-xl-6 ">
                <span>Age:</span>
                <p>20</p>
              </div>
              <div className="email col-12 col-xl-6">
                <span>Email:</span>
                <a href="mailto:salaheldinhamed19@gmail.com">
                  salaheldinhamed19@gmail.com
                </a>
              </div>
              <div className="from col-12 col-xl-6">
                <span>from:</span>
                <p>Egypt, Cairo</p>
              </div>
              <div className="media col-12">
                <a download="Salah Cv" href={resume}>
                  <b>Download CV</b>
                </a>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/salaheddin.hamed"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/salah_33_/?next=%2F"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
