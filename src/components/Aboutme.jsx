import { motion, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";

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

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/blobs.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animate("animate");
    }
  }, [inView]);

  return (
    <div className="relative flex items-center justify-center flex-col px-4 mx-auto sm:px-6 lg:px-8 skills-bg-gradiant w-screen h-[1080px]">
      <div
        ref={ref}
        className="relative flex flex-col-reverse w-full md:flex-row items-center justify-around z-500 overflow-hidden"
      >
        <div className="flex justify-center z-50">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="pl-0 sm:pl-20 mr-10 md:mr-0 flex flex-col justify-center z-50"
          >
            <motion.h1
              variants={textVariants}
              className="font-bold leading-tight text-white text-4xl sm:text-6xl lg:text-7xl contact_font text-center md:text-left "
            >
              About <span className="text-[peru]">Me</span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="max-w-lg mt-3 text-sm sm:text-sm md:text-xl lg:text-2xl contact_font text-center md:text-left leading-relaxed text-white md:mt-8"
            >
              Innovative software engineering student at 1337 coding school
              (42Network) skilled in crafting compelling web applications and
              seamless user interfaces. Proficient in seamlessly integrating
              captivating 3D environments, with a passion for applying front-end
              or full-stack skills to cutting-edge projects.
              <br />
              <span className="text-[peru]">
                Actively seeking an internship for hands-on experience in a
                professional setting.
              </span>
            </motion.p>

            {/* <p className="mt-4 text-sm text-white contact_font md:mt-8"></p> */}
            <div className="pb-20">
              <a
                href="#contact"
                className={`text-white text-center text-md rounded-xl block py-2 bg-[peru] w-[8rem] mt-5 contact_font hover:bg-[#ffcd9b] hover:text-black transition duration-500 ease-in-out mx-auto md:mx-0`}
                style={{ zIndex: 1000 }}
              >
                Let's Talk!
              </a>
            </div>
          </motion.div>
        </div>
        {/* <div className="absolute scale-img md:relative md:scale-img md:w-1/2 overflow-hidden"> */}
        <div className="relative pt-[0px] md:pt-[270px] lg:pt-[250px] xl:pt-[220px] pb-0 2xl:pb-[170px] z-0">
          <Lottie
            animationData={animationData}
            className="absolute blobs "
          />
          <img
            src="/images/saad_no_bg2.png"
            alt=""
            className="relative w-auto max-w-[200px] sm:max-w-[300px] md:max-w-[500px] 2xl:max-w-[600px] min-w-[150px] h-auto"
            style={{ zIndex: 1, overflow: "hidden" }}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundImage: `url(/wave-under2.svg)`,
          aspectRatio: 960 / 300,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 50,
          pointerEvents: "none",
          bottom: "-1px",
        }}
      ></div>
    </div>
  );
};
