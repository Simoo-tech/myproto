import React from "react";
import { Link } from "react-router-dom";
import temp1 from "../../assets/temp1.png";
import temp2 from "../../assets/temp2.png";
import temp3 from "../../assets/temp3.png";
import temp4 from "../../assets/temp4.png";
import "./protofilo.scss";
function protofilo() {
  return (
    <div className="proto">
      <h1 className="title mt-5">
        My Projects <span></span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <img src={temp1} alt="" />
            <h3>Kasper Website</h3>
            <p>Basic Template made by (HTML/CSS)</p>
            <a
              target="_blank"
              href="https://nacynzlglsdv2fvr0oibnw.on.drv.tw/temp/new%20temp%202/html/#"
              rel="noreferrer"
            >
              Go To Website
            </a>
          </div>
          <div className="col-12 col-md-5 ">
            <img src={temp2} alt="" />
            <h3>Dongole Website</h3>
            <p>Template made by (HTML/CSS/JavaScript)</p>
            <a
              target="_blank"
              href="https://nacynzlglsdv2fvr0oibnw.on.drv.tw/temp/Dongle%20website/my%20files/"
              rel="noreferrer"
            >
              Go To Website
            </a>
          </div>
          <div className="col-12 col-md-5 ">
            <img src={temp3} alt="" />
            <h3>Puzzle Game</h3>
            <p>Advanced JavaScript and some (HTML/CSS)</p>
            <a
              target="_blank"
              href="https://nacynzlglsdv2fvr0oibnw.on.drv.tw/temp/game%20anime/third%20Tutorial%20Html-Css-Js/"
              rel="noreferrer"
            >
              Go To Website
            </a>
          </div>
          <div className="col-12 col-md-5 ">
            <img src={temp4} alt="" />
            <h3>GBA Think-Tank Website</h3>
            <p>Full Website made by (ReactJS/SASS)</p>
            <a target="_blank" href="https://gbathink.org/" rel="noreferrer">
              Go To Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default protofilo;
