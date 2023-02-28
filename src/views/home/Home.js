import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import "./home.scss";
function Home() {
  const [state] = useState({
    title: "Salah Eldin ",
  });
  return (
    <div className="home">
      <div className="content">
        <div className="container">
          <div className="row">
            {/* <div className="col-1 lang">
              <Link to="">ENG</Link>
              <Link to="">AR</Link>
            </div> */}
            <div className="col-12 text">
              <h3 className="name">{state.title}</h3>
              <div className="skill">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    strings: [
                      "I'm React JS Developer",
                      "I'm UI/UX Desginer",
                      "I'm Freelancer ",
                    ],
                  }}
                />
              </div>
            </div>
            <div className="col-12 social">
              <a
                href="https://www.facebook.com/salaheddin.hamed"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/salah_33_/?next=%2F"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
