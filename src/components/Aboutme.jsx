import { motion,animate, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import {animate, useMotionValue } from "framer-motion";


export const AboutMe = () => {

    const textVariants = {
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          staggerChildren: 0.4,
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
          <div className="relative flex items-start justify-center flex-col px-4 mx-auto sm:px-6 lg:px-8 skills-bg-gradiant w-screen h-screen">
            <div
              className="absolute bottom-0 "
              style={{
                bottom: "-15px",
                backgroundImage: `url(/wave-under2.svg)`,
                aspectRatio: 960 / 300,
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                zIndex: 1,
              }}
            ></div>
            <div ref={ref} className="flex-col items-center md:flex-row z-50">
              <motion.div variants={textVariants} initial="initial" animate={inView ? "animate" : "initial"} className="pl-0 sm:pl-20">
                <motion.h1 variants={textVariants} className="font-bold leading-tight text-white text-5xl sm:text-6xl lg:text-7xl contact_font text-center md:text-left ">
                  {" "}
                  About <span className="text-[peru]">Me</span>
                </motion.h1>
                <motion.p variants={textVariants} className="max-w-lg mt-3 text-2xl text-center md:text-left leading-relaxed text-white md:mt-8">
                  Innovative software engineer skilled in crafting compelling web
                  applications and seamless user interfaces. Proficient in
                  seamlessly integrating captivating 3D environments, with a
                  passion for applying front-end or full-stack skills to
                  cutting-edge projects.
                  <br />
                  <span className="text-[peru]">I'm actively seeking an internship for hands-on experience in a professional setting.</span>
                </motion.p>
  
                <p  className="mt-4 text-sm text-white contact_font md:mt-8"></p>
                  <a
                    href="#contact"
                    className={`text-white text-center text-md rounded-xl block py-2 bg-[peru] w-[8rem] contact_font hover:bg-green-500 mx-auto md:mx-0`}
                  >
                  Let's Talk!
                </a>
              </motion.div>
            </div>
          </div>
        </>
    );
  };