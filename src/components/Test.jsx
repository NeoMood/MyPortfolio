import React, { useRef } from "react";
import Deskscene from "./Deskscene";
import { Canvas} from "@react-three/fiber";
import { motion } from "framer-motion";




export const Home = () => {
  const containerRef = useRef(null);
  const text = "Hi, This is";
  const splitText = text.split("");
  const text2 = "Saâd Gmira";
  const splitText2 = text2.split("");

  const staggeredAnimation = {
    initial: { opacity: 0, y: -100, scaleX: 0 },
    animate: { opacity: 1, y: 0, scaleX: 1 },
    transition: { duration: 2, delay: (i) => i * 0.1 },
  };


  return (
    <>
        <div ref={containerRef}>
          <div
            className="absolute bottom-0 "
            style={{
              bottom: "-15px",
              backgroundImage: `url(/wave-under.svg)`,
              aspectRatio: 960 / 300,
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          {/* <div className="bg-gradiant flex items-center w-screen h-screen overflow-hidden"> */}
          <div className="bg-gradiant flex items-center justify-center sm:justify-start w-screen h-screen ">
            <div id="mytext" className="md:pl-20 md:mt-20 ">

              <motion.div className="pl-10 text-4xl md:text-6xl font-extrabold leading-snug text-white thisis">
                {splitText.map((char, i) => (
                  <motion.span
                    initial={staggeredAnimation.initial}
                    animate={staggeredAnimation.animate}
                    transition={{
                      ...staggeredAnimation.transition,
                      delay: staggeredAnimation.transition.delay(i),
                    }}
                    key={i}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div className="pl-10 text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-snug name text-[#CD853F]">
                {splitText2.map((char, i) => (
                  <motion.span
                    initial={staggeredAnimation.initial}
                    animate={staggeredAnimation.animate}
                    transition={{
                      ...staggeredAnimation.transition,
                      delay: staggeredAnimation.transition.delay(i),
                    }}
                    key={i}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex pl-10 text-sm lg:text-xl xl:text:2xl md:text-lg sm:text-md text-start pt-4  h-12 ">
                <div className=" contact_font text-white ">I'm a</div>
                <div className="flip">
                  <div>
                    <div>Front-End Developer</div>
                  </div>
                  <div>
                    <div>Software engineering student</div>
                  </div>
                  <div>
                    <div>Music Producer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-0 absolute w-full h-full">
          <Canvas shadows camera={{ fov: 60 }}>
            <Deskscene />
            {/* <Perf position="bottom-right" /> */}
          </Canvas>
        </div>
    </>
  );
};

