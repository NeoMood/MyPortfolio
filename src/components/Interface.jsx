import React, { useEffect, Suspense, useRef } from "react";
import { Experience } from "./Experience";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { Image, Text } from "@react-three/drei";
import { Home } from "./Home";
import { AboutMe } from "./Aboutme";
import { Contact } from "./Contact";
import { SkillSection } from "./Skills";

const Section = (props) => {
  const { children } = props;
  const { id } = props;

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

// const TextEffect = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const textElements = gsap.utils.toArray(".textanimation");

//     textElements.forEach((text) => {
//       gsap.fromTo(
//         text,
//         { backgroundSize: "100%" },
//         {
//           backgroundSize: "0%",
//           ease: "none",
//           scrollTrigger: {
//             trigger: text,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <div className="relative flex items-center justify-center flex-col  skills-bg-gradiant w-screen h-screen overflow-hidden">
//         <Tsparticles />
//         <div className="text-6xl font-extrabold leading-snug text-white">
//           <h1 className=""> SKILLS </h1>
//         </div>

//         <div className="flex">
//           <div className="flex-wrap px-16  w-1/2 space-y-4">
//             <h1 className="text-white text-center"> Coding Languages </h1>
//             <h1 className="textanimation">
//               C<span className="spananimation">C 90%</span>
//             </h1>
//             <h1 className="textanimation">
//               C++<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               Javascript<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ReactJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ThreeJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ReactJS<span className="spananimation">90%</span>
//             </h1>
//           </div>
//           <div className="flex-wrap px-16   w-1/2 space-y-4">
//             <h1 className="text-white text-center"> Technologies </h1>
//             <h1 className="textanimation">
//               ThreeJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ReactJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ThreeJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ReactJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ThreeJS<span className="spananimation">90%</span>
//             </h1>
//             <h1 className="textanimation">
//               ReactJS<span className="spananimation">90%</span>
//             </h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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
    </group>
  );
};

// export const currentProjectAtom = atom(Math.floor(projects.length / 2));
export const currentProjectAtom = atom(0);

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
      <div className="flex justify-center bg-gradiant w-screen h-[1100px]">
        {/* <div
          className="absolute bottom-0 left-0"
          style={{
            // bottom: "-15px",
            // backgroundImage: `url(/wave-top.svg)`,
            backgroundColor: "#fff",
            aspectRatio: 960 / 300,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div> */}
        <div className="text-6xl pt-20 font-extrabold leading-snug drop-shadow-xl text-white">
          <h1 className=""> Projects </h1>
        </div>
        <div className="absolute w-full h-[1100px]">
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
