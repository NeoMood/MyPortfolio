import React, { useEffect } from "react";
import { Tsparticles } from "./tsparticles";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SkillSection = () => {
  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
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
    <>
      <div className="skills-bg-gradiant">
        <Tsparticles />
        <motion.div
          variants={variants}
          initial={"initial"}
          animate={inView ? "animate" : "initial"}
          ref={ref}
          className="parent h-screen w-screen px-10 mb-10 "
        >
          <motion.div className="div1 text-6xl font-extrabold text-white mt-10 flex items-center justify-center ">
            <h1>SKILLS</h1>
          </motion.div>
          <motion.div variants={variants} className="div2 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">Front-end Development</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/react.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/nextjstext.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/threejstext.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/html.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/css.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/tailwind.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div variants={variants} className="div3 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">Back-end Development</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/nestjs.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/node.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/postgres.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/socketiotext.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div variants={variants} className="div4 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">Programming Languages</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/c.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/cpp.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/js.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/ts.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/python.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div variants={variants} className="div5 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">DevOps and Version Control</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/git.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/github.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/docker.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/vbox.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div variants={variants} className="div6 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">System Proficiency</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/bash.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/ssh.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/linux.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div variants={variants} className="div7 bg-[#272730] rounded-3xl">
            <h1 className="skills-titles">Languages</h1>
            <div className=" w-full h-full flex gap-2 place-content-around flex-wrap px-5">
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/ar.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/en.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
                style={{
                  backgroundImage: `url(/techstack/fr.svg)`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
