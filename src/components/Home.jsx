import React, { Suspense, useEffect, useRef, useState } from "react";
import Deskscene from "./Deskscene";
import { Canvas } from "@react-three/fiber";
import { animate, motion } from "framer-motion";
import Lottie from "lottie-react";
import { Loader } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const containerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/scroll.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  const textVariants = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 1,
      },
    },
  };

  const lottievariants = {
    initial2: {
      opacity: 0,
    },
    animate2: {
      opacity: 1,
      transition: {
        duration: 6,
      },
    },
  };

  // const [ref, inView] = useInView();

  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight / 5,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        // ref={ref}
        className="relative bg-gradiant flex items-center justify-center sm:justify-start w-screen min-h-[900px] h-[100vh]"
      >
        <div ref={containerRef}>
          <motion.div
            initial="initial"
            // animate={inView ? "animate" : "initial"}
            animate="animate"
            variants={textVariants}
            id="mytext"
            className="md:pl-20 md:mt-20 "
          >
            <motion.div className="pl-10 text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-snug text-white thisis">
              Hi, This is
            </motion.div>
            <motion.div
              className="pl-10 text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl font-extrabold leading-snug name text-[#CD853F]"
              initial="initial"
              // animate={inView ? "animate" : "initial"}
              animate="animate"
              variants={textVariants}
            >
              Saâd Gmira
            </motion.div>

            <motion.div
              initial="initial"
              // animate={inView ? "animate" : "initial"}
              
              variants={textVariants}
              className="flex pl-10 text-sm lg:text-xl xl:text-2xl 2xl:text-3xl md:text-lg sm:text-md text-start pt-4  h-12 "
            >
              <div className=" contact_font text-white ">I'm a</div>
              <div className="flip">
                <div>
                  <div>Full-Stack Developer</div>
                </div>
                <div>
                  <div>Software engineering student</div>
                </div>
                <div>
                  <div>Music Producer</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial2"
            animate="animate2"
            variants={lottievariants}
            onClick={handleScroll}
          >
            <Lottie
              animationData={animationData}
              className="absolute bottom-20 left-1/2 z-10 w-10 transform -translate-x-1/2 cursor-pointer"
            />
          </motion.div>
        </div>
        <div
          className="absolute bottom-0 left-0"
          style={{
            bottom: "-2px",
            backgroundImage: `url(/wave-under.svg)`,
            aspectRatio: 960 / 300,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="ml-0 absolute w-full h-[1100px]">
        <Suspense fallback={null}>
          <Canvas shadows>
            <Deskscene />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};
