import React, { useEffect, Suspense, useRef, useState } from "react";
import { Experience } from "./Experience";
import Typist from "react-typist-component";
import { Tsparticles } from "./tsparticles";
import Deskscene from "./Deskscene";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu } from "./Menu";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Project } from './projects';
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { Image, Text } from "@react-three/drei";

const Section = (props) => {
  const { children } = props;
  const { id } = props;

  return (
    <section
      id={id}
      className={`
    h-screen w-screen 
    flex flex-col justify-center items-start 
    `}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* <div className='flex flex-col items-center w-screen'> */}
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Skills />
      <Section id="projects">
        <ProjectsSection />
      </Section>
      <Section className="" id="contact">
        <Contact />
      </Section>
      {/* <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/> */}
      {/* </div> */}
    </>
  );
};

export const About = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Section id="about">
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

          <div className="bg-gradiant flex items-center w-screen h-screen overflow-hidden">
            <div className="pl-20 mt-20 md:mt-0">
              <motion.div
                className="pl-10 text-4xl md:text-6xl font-extrabold leading-snug text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                <h1 className="thisis">Hi, This is</h1>
                <span className="name text-[#CD853F]">Saâd Gmira</span>
              </motion.div>
              <motion.p
                className="pl-10 text-xl text-white "
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                a software engineering student
              </motion.p>
            </div>
          </div>
        </div>
        <div className="ml-0 absolute w-full h-full">
          <Canvas shadows camera={{ fov: 60 }}>
            <Deskscene />
          </Canvas>
        </div>
      </Section>
    </>
  );
};

const skills = [
  {
    title: "C",
    level: 90,
  },
  {
    title: "C++",
    level: 80,
  },
  {
    title: "Javascript",
    level: 60,
  },
  {
    title: "Next.js",
    level: 50,
  },

  {
    title: "MongoDB",
    level: 10,
  },
];

const TextEffect = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray(".textanimation");

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center flex-col  skills-bg-gradiant w-screen h-screen overflow-hidden">
        <Tsparticles />
        <div className="text-6xl font-extrabold leading-snug text-white">
          <h1 className=""> SKILLS </h1>
        </div>

        <div className="flex">
          <div className="flex-wrap px-16  w-1/2 space-y-4">
            <h1 className="text-white text-center"> Coding Languages </h1>
            <h1 className="textanimation">
              C<span className="spananimation">C    90%</span>
            </h1>
            <h1 className="textanimation">
              C++<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              Javascript<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
          </div>
          <div className="flex-wrap px-16   w-1/2 space-y-4">
            <h1 className="text-white text-center"> Technologies </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
          </div>
          <div className="flex-wrap px-16   w-1/2 space-y-4">
            <h1 className="text-white text-center"> Coding Languages </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ThreeJS<span className="spananimation">90%</span>
            </h1>
            <h1 className="textanimation">
              ReactJS<span className="spananimation">90%</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export const Skills = () => {
  // const containerRef = useRef(null);
  return (
    <Section id="skills">
      <TextEffect />
      {/* <Tsparticles container={containerRef}/> */}
    </Section>
  );
};

export const projects = [
  {
    title: "Ft_Transcendance",
    image: "/images/transcendance.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "A modern twist on classic Pong with 3D gameplay,\nprofile creation, friend connection, real-time chat, and\nmultiplayer matches.",
  },
  {
    title: "Ft_IRC",
    image: "/images/irc.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      " a reliable IRC server built in C++, enabling real-time user communication.\n Implemented core features for authentication, message routing, and channel management",
  },
  {
    title: "INCEPTION",
    image: "/images/inception.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a system administration project that involves setting up a small infrastructure\ncomposed of different services by virtualizing multiple Docker images",
  },
  {
    title: "CUB3D",
    image: "/images/cub3d.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Minishell",
    image: "/images/minishell.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Philosophers",
    image: "/images/Philo.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Piscine C++",
    image: "/images/cpp.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "So_long",
    image: "/images/solong.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Pushswap",
    image: "/images/pushswap.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "get_next_line",
    image: "/images/getnextline.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Ft_printf",
    image: "/images/ftprintf.jpg",
    url: "https://github.com/NeoMood/ft_transcendence",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
];

export const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgopacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgopacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgopacity.get();
  }, []);

  return (
    <group {...props} position={[0, 0.05, -0.067]} rotation-x={-Math.PI / 12}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[0.13, 0.07]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <Image
        scale={[0.14, 0.088, 0.091]}
        url={project.image}
        toneMapped={false}
      />
      {highlighted && (
        <>
          <Text
            color={"#fff"}
            scale={0.16}
            fontSize={0.2}
            position={[-0, 0.13, 0]}
          >
            {project.title}
          </Text>
          <Text
            color={"#fff"}
            scale={0.1}
            fontSize={0.1}
            position={[-0, 0.09, 0]}
          >
            {project.description}
          </Text>
        </>
      )}
      {/* <Text3D>
                {project.title}
                <meshNormalMaterial />
            </Text3D> */}
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <div className="flex justify-center bg-gradiant w-screen h-screen ">
        <div className="text-6xl pt-20 font-extrabold leading-snug drop-shadow-xl text-white">
          <h1 className=""> Projects </h1>
        </div>
        <div className="absolute w-full h-full">
          <Canvas shadows camera={{ fov: 78, position: [-1, 2, 7] }}>
            <Experience />
          </Canvas>
          <button
            onClick={previousProject}
            className="absolute text-xl left-0 top-1/4 transform -translate-y-1/2 hover:backdrop-blur-[10px] text-white font-bold px-4 rounded backdrop-blur-[6px] ml-8"
          >
            &larr; Previous
          </button>
          <button
            onClick={nextProject}
            className="absolute text-xl right-0 top-1/4 transform -translate-y-1/2 hover:backdrop-blur-[10px] text-white font-bold px-4 rounded backdrop-blur-[6px] mr-8"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);
  return (
    <group>
      {projects.map((project, index) => {
        return (
          <motion.group
            key={"project_" + index}
            position={[index * 0.25, 0, 0]}
            animate={{
              x: 0 + (index - currentProject) * 0.25,
              y: currentProject === index ? 0 : 0.02,
              z: currentProject === index ? 0 : 0,
              rotateX: currentProject === index ? 0 : -Math.PI / 12,
              rotateZ: currentProject === index ? 0 : (-0.1 * Math.PI) / 12,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        );
      })}
    </group>
  );
};

export const Contact = () => {
  return (
    <>
      <div className="relative flex justify-center items-center sm:pl-40 sm:justify-start skills-bg-gradiant w-screen h-screen">
        {/* <div className="flex rounded-lg p-8 w-[400px] h-[400px] flex-col bg-[peru]"> */}
        <div className="flex rounded-lg p-5 w-[400px] h-[400px] flex-col">
          <h1 className="text-5xl font-extrabold mb-10 text-white text-center">
            {" "}
            Let's <span className="text-[peru]">Talk</span>!
          </h1>
          <div className="mb-3">
            <label className="font-bold text-sm block mb-3 pl-1 text-white">Your Name</label>
            <input
              className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
              type="text"
              name="name"
              // placeholder="Your Name"
              required
              />
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm block mb-3 pl-1 text-white">Your Email</label>
            <input
              className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
              type="text"
              name="email"
              // placeholder="Your Email"
              required
              />
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm block mb-3 pl-1 text-white">Your Message</label>
            <textarea
              className="rounded-2xl bg-slate-700 pl-3 shadow-xl block h-[70px] w-full max-h-[150px] min-h-[70px] text-white"
              name="message"
              // placeholder="Your Message"
              required
              />
          </div>
          <button type="submit" className="text-white rounded-xl block py-2 bg-[peru] w-[10rem] ">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

