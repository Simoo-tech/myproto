/* eslint-disable react/style-prop-object */
import React from "react";
import "./resume.scss";
import cert1 from "../../assets/cert/Course_Certificate_En.pdf_1.jpg";
import cert2 from "../../assets/cert/Erhical hacking.pdf_1.jpg";
import cert3 from "../../assets/cert/intro cyber sec.pdf_1.jpg";
import cert4 from "../../assets/cert/introduction network.pdf_1.jpg";
import cert5 from "../../assets/cert/uiux.pdf_1.jpg";
const Resume = () => {
  return (
    <>
      <div className="resume mb-5">
        <h1 className="title mt-5 ">
          Resume <span></span>
        </h1>
        <div className="container">
          <div className="row">
            <div className="skills col-12">
              <div className="heading col-12">
                <p>My level of knowledge in some tools</p>
                <h1> My Skills</h1>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html"> HTML/CSS</label>
                <div className="progress" width="90%">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html"> SASS</label>
                <div className="progress" width="90%">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html">JavaScript</label>
                <div className="progress" width="80%">
                  <span style={{ width: "80%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html">React JS</label>
                <div className="progress" width="75%">
                  <span style={{ width: "75%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html">Web Design</label>
                <div className="progress" width="85%">
                  <span style={{ width: "85%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html">Photoshop</label>
                <div className="progress" width="90%">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>
              <div className="skill col-12 col-md-6">
                <label htmlFor="html">Illustrator</label>
                <div className="progress" width="75%">
                  <span style={{ width: "75%" }}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="cert col-12">
              <div className="heading col-12">
                <h1> My Certificate</h1>
              </div>
              <div className="col-12 col-md-5 box">
                <h4 className="info">Computer Network Fundamentals</h4>
                <p>from Mahara-Tech</p>
                <a href={cert1} download="copmuter network certificate">
                  Download
                </a>
              </div>
              <div className="col-12 col-md-5 box">
                <h4 className="info">Ethical hacking</h4>
                <p>from Mahara-Tech</p>
                <a href={cert2} download="Ethical hacking">
                  Download
                </a>
              </div>
              <div className="col-12 col-md-5  box">
                <h4 className="info">Introduction to Cyber Security</h4>
                <p>from EDRAAK</p>
                <a href={cert3} download="Introduction to Cyber Security">
                  Download
                </a>
              </div>
              <div className="col-12 col-md-5  box">
                <h4 className="info">Introduction to Network Security</h4>
                <p>from Mahara-Tech</p>
                <a href={cert4} download="Introduction to Network Security">
                  Download
                </a>
              </div>
              <div className="col-12 col-md-5  box">
                <h4 className="info">User Experience Design</h4>
                <p>from EDRAAK</p>
                <a href={cert5} download="User Experience Design">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
