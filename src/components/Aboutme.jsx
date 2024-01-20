import { motion, animate } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    }
  }, [inView]);

  return (
    <div className="relative flex items-start  flex-col px-4 mx-auto sm:px-6 lg:px-8 skills-bg-gradiant w-screen h-screen overflow-hidden">
      <div
        ref={ref}
        className="relative flex flex-col-reverse w-full md:flex-row items-center justify-around z-50 "
      >
        <div className="flex justify-center">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="pl-0 sm:pl-20 mr-10 md:mr-0"
          >
            <motion.h1
              variants={textVariants}
              className="font-bold leading-tight text-white text-5xl sm:text-6xl lg:text-7xl contact_font text-center md:text-left "
            >
              About <span className="text-[peru]">Me</span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="max-w-lg mt-3 text-lg md:text-xl lg:text-2xl text-center md:text-left leading-relaxed text-white md:mt-8"
            >
              Innovative software engineer skilled in crafting compelling web
              applications and seamless user interfaces. Proficient in
              seamlessly integrating captivating 3D environments, with a passion
              for applying front-end or full-stack skills to cutting-edge
              projects.
              <br />
              <span className="text-[peru]">
                I'm actively seeking an internship for hands-on experience in a
                professional setting.
              </span>
            </motion.p>

            {/* <p className="mt-4 text-sm text-white contact_font md:mt-8"></p> */}
            <a
              href="#contact"
              className={`text-white text-center text-md rounded-xl block py-2 bg-[peru] w-[8rem] mt-5 contact_font hover:bg-[#ffcd9b] hover:text-black transition duration-500 ease-in-out mx-auto md:mx-0`}
            >
              Let's Talk!
            </a>
          </motion.div>
        </div>
        {/* <div className="absolute scale-img md:relative md:scale-img md:w-1/2 overflow-hidden"> */}
        <div className="relative pt-[0px] md:pt-[100px] lg:pt-[100px] xl:pt-[100px] pb-0 2xl:pb-[170px] z-0">
          <img
            src="/images/saad_no_bg2.png"
            alt=""
            className="relative w-auto max-w-[250px] sm:max-w-[300px] md:max-w-[500px] 2xl:max-w-[600px] min-w-[100px] h-auto"
            style={{ zIndex: -1, overflow: "hidden" }}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0  "
        style={{
          backgroundImage: `url(/wave-under2.svg)`,
          aspectRatio: 960 / 300,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 50,
        }}
      ></div>
    </div>
  );
};
