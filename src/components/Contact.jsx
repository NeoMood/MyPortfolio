import React, { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9md62lb",
        "template_ouwuwee",
        form.current,
        "AuV6J6DkkXzcu1cCJ"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              title: "Thank You!",
              text: "Message sent successfully!",
              icon: "success",
            });
            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      );
  };

  const aboutVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const formVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate("animate");
    }
  }, [inView]);

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/paperplane2.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center sm:pl-40 pb-10 sm:justify-start skills-bg-gradiant w-screen h-[800px] min-h-[100vh] overflow-hidden">
        <div
          className="absolute top-0 left-0"
          style={{
            backgroundImage: `url(/wave-contact.svg)`,
            aspectRatio: 960 / 300,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex items-center justify-center xl:justify-around w-full">
          <motion.div
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={aboutVariants}
            className="flex rounded-lg p-5 w-[350px] md:w-[400px] lg:w-[500px] xl:w-[700px] h-[400px] flex-col z-10"
          >
            <motion.h1
              variants={aboutVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-10 text-white text-center contact_font z-[1]"
            >
              {" "}
              Let's <span className="text-[peru]">Talk</span>!
            </motion.h1>
            <form onSubmit={sendEmail} ref={form} className="px-2">
              <motion.div variants={formVariants} className="mb-3">
                <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                  Your Name
                </label>
                <input
                  className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] xl:h-[50px] w-full text-white"
                  type="text"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div variants={formVariants} className="mb-3">
                <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                  Your Email
                </label>
                <input
                  className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] xl:h-[50px] w-full text-white"
                  type="text"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div variants={formVariants} className="mb-3">
                <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                  Your Message
                </label>
                <textarea
                  className="rounded-2xl bg-slate-700 pl-3 shadow-xl block h-[70px] xl:h-[90px] w-full max-h-[150px] min-h-[70px] text-white"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </motion.div>
              <button
                type="submit"
                className={`text-white rounded-xl block py-2 bg-[peru] w-[10rem] contact_font transition duration-500 ease-in-out ${
                  !name || !email || !message
                    ? "hover:bg-slate-700 cursor-not-allowed"
                    : "hover:bg-[#ffcd9b] hover:text-black"
                }`}
                disabled={!name || !email || !message}
              >
                Send Message
              </button>
            </form>
            <motion.div variants={formVariants} className="flex">
              <a
                className="social-icon social-icon--github"
                href="https://github.com/NeoMood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faGithub}
                />
                <div className="tooltip">Github</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/sa%C3%A2d-gmira-78a792212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faLinkedin}
                />
                <div className="tooltip">LinkedIn</div>
              </a>
              <a
                className="social-icon social-icon--instagram"
                href="https://www.instagram.com/neomoodmusic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faInstagram}
                />
                <div className="tooltip">Instagram</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="mailto:saad02.gmira2002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-[25px] h-[25px]"
                  icon={faEnvelope}
                />
                <div className="tooltip">Mail</div>
              </a>
              <a
                className="social-icon social-icon--linkedin"
                href="tel:+212655873358"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faPhone} />
                <div className="tooltip">Phone</div>
              </a>
            </motion.div>
          </motion.div>
      <Lottie animationData={animationData} className="mt-[150px] scale-[0.7] hidden lg:block" />
        </div>
        <footer className="absolute bottom-0 left-0 w-full text-white  text-[12px] p-3 text-center flex justify-center items-center">
          ©2024 by Saâd Gmira
        </footer>
      </div>
    </>
  );
};

export default Contact;
