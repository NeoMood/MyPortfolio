import React, { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const form = useRef();
    // console.log(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, process.env.EMAILJS_PUBLICKEY);
  
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
        console.log("in view");
      }
    }, [inView]);
  
    return (
      <>
        <div className="relative flex justify-center items-center sm:pl-40 sm:justify-start skills-bg-gradiant w-screen h-screen">
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
          <motion.div
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={aboutVariants}
            className="flex rounded-lg p-5 w-[400px] h-[400px] flex-col z-10"
          >
            <motion.h1 variants={aboutVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-10 text-white text-center contact_font z-[1]">
              {" "}
              Let's <span className="text-[peru]">Talk</span>!
            </motion.h1>
            <form onSubmit={sendEmail} ref={form}>
              <motion.div variants={formVariants} className="mb-3">
                <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                  Your Name
                </label>
                <input
                  className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
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
                  className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
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
                  className="rounded-2xl bg-slate-700 pl-3 shadow-xl block h-[70px] w-full max-h-[150px] min-h-[70px] text-white"
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
                    : "hover:bg-green-500"
                }`}
                disabled={!name || !email || !message}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </>
    );
  };
  