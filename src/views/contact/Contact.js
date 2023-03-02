import React, { useRef, useState } from "react";
import "./contact.scss";
import { BiIntersect } from "react-icons/bi";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
function Contact() {
  //////////////////// Email Checker//////////////////
  const [email, setEmail] = useState("");
  const rgExp = /\b[\w\.-]+@[\a-z\.-]+\.\w{2,4}\b/g;
  const CheckEmail = rgExp.test(email);
  if (CheckEmail) {
  }
  //////////////// On Submit ////////////////////
  const [isSubmit, setIsSubmit] = useState(true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmit(false);
    emailjs
      .sendForm("service_asavivj", "temp1", form.current, "IRI63lBxmIVAro7tT")
      .then(
        (result) => {
          setTimeout(() => {
            if (result.text === "OK") {
              let submit = document.querySelector(".submit");
              submit.classList.add("active");
              setIsSubmit(true);
            }
          }, 2000);
        },
        (error) => {}
      );
  };

  return (
    <>
      <div className="submit">
        <div>
          <h2>Thank you for messaging us</h2>
          <h4>I appreciate your message</h4>
          <p>We will contact you as soon as possible</p>
          <a href="/myproto">Back to main page</a>
        </div>
      </div>
      <div className="contact mb-5">
        <h1 className="title mt-5">
          Get in touch <span></span>
        </h1>
        <div className="container">
          <div className="row">
            <form className="col-12 col-lg-7" ref={form} onSubmit={sendEmail}>
              <h3>Message Me</h3>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                  className="col-12 col-lg-5"
                />
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                    className="col-12 col-lg-7"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <AiOutlineCheckCircle
                    className={CheckEmail ? "check active" : "check"}
                  />
                  <AiOutlineCloseCircle
                    className={CheckEmail ? "wrong " : "wrong active"}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="col-12"
                required
                name="_subject"
              />
              <textarea
                placeholder="Your Message"
                className="col-12"
                rows={6}
                required
                name="message"
              />
              <button
                type="submit"
                value="Send"
                onClick={
                  CheckEmail
                    ? ""
                    : (e) => {
                        e.preventDefault();
                      }
                }
              >
                {isSubmit ? (
                  <p>Send Message</p>
                ) : (
                  <div className="send">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                )}
              </button>
            </form>
            <div className="info col-12 col-lg-5">
              <h3>Contact Info</h3>
              <p>
                Always available for freelance work if the right project comes
                along, Feel free to contact me!
              </p>
              <div className="box">
                <BiIntersect />
                <div className="name">
                  <h5>name:</h5>
                  <p>Salah Eldin Mahmoud</p>
                </div>
              </div>
              <div className="box">
                <MdPhone />
                <div className="call">
                  <h5>Call Me: </h5>
                  <p>+201116648153</p>
                </div>
              </div>
              <div className="box">
                <GrMail />
                <div className="email">
                  <h5>My Email:</h5>
                  <p>
                    <a href="mailto:salaheldinhamed19@gmail.com">
                      salaheldinhamed19@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

<>
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
  ></script>
  <script type="text/javascript">emailjs.init('IRI63lBxmIVAro7tT')</script>
</>;
