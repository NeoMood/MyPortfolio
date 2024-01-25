import React, { useEffect, Suspense, useRef, lazy, useState, useCallback } from "react";
import { Experience } from "./Experience";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { Image, Text } from "@react-three/drei";


// import { Home } from "./Home";
// import { AboutMe } from "./Aboutme";
// import { Contact } from "./Contact";
// import { SkillSection } from "./Skills";

const Home = lazy(() => import("./Home"));
const AboutMe = lazy(() => import("./Aboutme"));
const SkillSection = lazy(() => import("./Skills"));
const Contact = lazy(() => import("./Contact"));


const Section = (props) => {
  const { children } = props;
  const { id } = props;
  
  // useEffect(() => {
  //   console.log(`Section ${id} rendered`);
  // });

  return (
    <section
      id={id}
      className={`
     w-full 
    flex flex-col justify-center items-start overflow-y
    `}
      style={{ height: "fit-content" }}
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  console.log(`Section rendered`);
  return (
    <>
      <Section id="home">
          <Home />
        </Section>

      <Section id="about">
        <AboutMe />
      </Section>

      <Section id="skills">
        <SkillSection />
      </Section>

      <Section id="projects">
        <ProjectsSection />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </>
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
    url: "https://github.com/NeoMood/ft_irc",
    description:
      " a reliable IRC server built in C++, enabling real-time user communication.\n Implemented core features for authentication, message routing, and channel management",
  },
  {
    title: "INCEPTION",
    image: "/images/inception.jpg",
    url: "https://github.com/NeoMood/Inception",
    description:
      "a system administration project that involves setting up a small infrastructure\ncomposed of different services by virtualizing multiple Docker images",
  },
  {
    title: "CUB3D",
    image: "/images/cub3d.jpg",
    url: "https://github.com/NeoMood/cub3D",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Minishell",
    image: "/images/minishell.jpg",
    url: "https://github.com/NeoMood/Minishell",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Philosophers",
    image: "/images/Philo.jpg",
    url: "https://github.com/NeoMood/Philosophers",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Piscine C++",
    image: "/images/cpp.jpg",
    url: "https://github.com/NeoMood/CPP",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "So_long",
    image: "/images/solong.jpg",
    url: "https://github.com/NeoMood/so_long",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Pushswap",
    image: "/images/pushswap.jpg",
    url: "https://github.com/NeoMood/Push_swap",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "get_next_line",
    image: "/images/getnextline.jpg",
    url: "https://github.com/NeoMood/Get_Next_Line",
    description:
      "a 3D game in C, employing ray-casting, inspired by the iconic Wolfenstein3D.",
  },
  {
    title: "Ft_printf",
    image: "/images/ftprintf.jpg",
    url: "https://github.com/NeoMood/ft_printf",
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
    </group>
  );
};

// export const currentProjectAtom = atom(Math.floor(projects.length / 2));
export const currentProjectAtom = atom(0);
export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = useCallback(() => {
    setCurrentProject((currentProject + 1) % projects.length);
  }, [currentProject, setCurrentProject]);

  const previousProject = useCallback(() => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  }, [currentProject, setCurrentProject]);

  return (
    <>
      <div className="flex justify-center bg-gradiant w-screen min-h-[600px] h-[100vh]">
        <div className="text-6xl pt-20 font-extrabold leading-snug drop-shadow-xl text-white">
          <h1 className=""> Projects </h1>
        </div>
        <div className="absolute w-full min-h-[600px] h-[100vh]">
          <Suspense fallback={null}>
            <Canvas shadows camera={{ fov: 75, position: [-1, 2, 7] }}>
              <Experience />
            </Canvas>
          </Suspense>
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
        const isCurrentProject = currentProject === index;
        const xPosition = 0 + (index - currentProject) * 0.25;
        return (
          <motion.group
            key={"project_" + index}
            position={[index * 0.25, 0, 0]}
            animate={{
              x: xPosition,
              y: isCurrentProject ? 0 : 0.02,
              z: isCurrentProject ? 0 : 0,
              rotateX: isCurrentProject ? 0 : -Math.PI / 12,
              rotateZ: isCurrentProject ? 0 : (-0.1 * Math.PI) / 12,
            }}
          >
            <Project project={project} highlighted={isCurrentProject} />
          </motion.group>
        );
      })}
    </group>
  );
};