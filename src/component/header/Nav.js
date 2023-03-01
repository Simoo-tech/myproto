import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.scss";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import logo from "../../assets/logo_1@2x-8.png";
export default function Navs() {
  const btn = useRef();
  const handleACtive = () => {
    btn.current.classList.toggle("active");
  };
  return (
    <>
      <div className="navbar">
        <Container>
          <Navbar.Brand className="logo col-6 col-lg-4">
            <Link to="/myproto">
              <img src={logo} alt="" srcset="" />
              <h3>Salah Eldin</h3>
            </Link>
          </Navbar.Brand>
          <HiBars3CenterLeft
            aria-controls="basic-navbar-nav"
            className="toggle"
            onClick={handleACtive}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="col-12 col-lg-7"
            ref={btn}
          >
            <Nav>
              <ul>
                <li>
                  <Link to="/myproto">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
    </>
  );
}
