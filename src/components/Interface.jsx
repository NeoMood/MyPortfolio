import React, {
  useEffect,
  Suspense,
  useRef,
  lazy,
  useState,
  useCallback,
} from "react";
import { Experience } from "./Experience";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { Image, Text, PerformanceMonitor } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

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
  // console.log(`Section rendered`);
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
      "A full-stack website showcasing a modern twist\non classic Pong with 3D gameplay,profile creation,\nfriend connection, real-time chat,\nand multiplayer matches.",
  },
  {
    title: "Ft_IRC",
    image: "/images/irc.jpg",
    url: "https://github.com/NeoMood/ft_irc",
    description:
      " a reliable IRC server built in C++, enabling real-time user communication.Implemented core features for authentication, message routing, and channel management",
  },
  {
    title: "INCEPTION",
    image: "/images/inception.jpg",
    url: "https://github.com/NeoMood/Inception",
    description:
      "a system administration project that involves setting up a small infrastructure composed of different services by virtualizing multiple Docker images",
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
      "A C based Unix shell recreation, inspired by the functionalities of Bash, with essential features for command-line interaction and process management.",
  },
  {
    title: "Philosophers",
    image: "/images/Philo.jpg",
    url: "https://github.com/NeoMood/Philosophers",
    description:
      "A C based project diving into thread creation, mutexes, processes, and semaphores. Emphasizes the essentials of process threading while simulating the classic Dining Philosophers problem.",
  },
  {
    title: "Piscine C++",
    image: "/images/cpp.jpg",
    url: "https://github.com/NeoMood/CPP",
    description:
      "An immersive program designed to provide hands-on experience with C++ concepts and programming",
  },
  {
    title: "So_long",
    image: "/images/solong.jpg",
    url: "https://github.com/NeoMood/so_long",
    description:
      "A graphic project in C for developing a 2D game using 42minilbx library.",
  },
  {
    title: "Pushswap",
    image: "/images/pushswap.jpg",
    url: "https://github.com/NeoMood/Push_swap",
    description:
      "A C based project requiring the efficient organization of two stacks, A and B. The goal is to sort Stack A, initially containing a random list of numbers, using a minimal number of predefined actions.",
  },
  {
    title: "Get_Next_Line",
    image: "/images/getnextline.jpg",
    url: "https://github.com/NeoMood/Get_Next_Line",
    description:
      "A C function that reads lines ending with newline characters from a file descriptor. Upon successive calls, the function fetches the next line",
  },
  {
    title: "Ft_printf",
    image: "/images/ftprintf.jpg",
    url: "https://github.com/NeoMood/ft_printf",
    description:
      "A C project focused on replicating the well-known printf function from the C library. Gaining a comprehensive understanding of variadic arguments",
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
            position={[-0, 0.14, 0]}
          >
            {project.title}
          </Text>
          <Text
            color={"#fff"}
            scale={0.1}
            fontSize={0.11}
            position={[-0, 0.09, 0]}
            lineHeight={1.3}
            textAlign="center"
            maxWidth={2.5}
            overflowWrap="break-word"
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

  const canvasRef = useRef();
  const [frameloop, setFrameloop] = useState("never");

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setFrameloop(isIntersecting ? "always" : "never");
    }, {});

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const [dpr, setDpr] = useState(
    window.devicePixelRatio - window.devicePixelRatio / 2
  );

  return (
    <>
      <div className="relative flex justify-center bg-gradiant w-screen min-h-[600px] h-[100vh] left-[-1]">
        <div className="absolute z-10 flex justify-between items-start space-x-2 md:space-x-10 pt-10 xl:pt-[100px] font-extrabold leading-snug drop-shadow-xl text-white">
          <button
            onClick={previousProject}
            className="text-xl  hover:backdrop-blur-[10px] text-white font-bold px-4 rounded backdrop-blur-[6px]"
          >
            {/* &larr; Previous */}
            <FontAwesomeIcon
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] 2xl:w-[70px] 2xl:h-[70px]"
              icon={faCircleLeft}
            />
          </button>
          <h1 className="contact_font text-3xl md:text-6xl 2xl:text-7xl"> Projects </h1>
          <button
            onClick={nextProject}
            className="text-xl   hover:backdrop-blur-[10px] text-white font-bold px-4 rounded backdrop-blur-[6px] "
          >
            {/* Next &rarr; */}
            <FontAwesomeIcon
              className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] 2xl:w-[70px] 2xl:h-[70px]"
              icon={faCircleRight}
            />
          </button>
        </div>
        <div className="absolute w-full min-h-[600px] h-[100vh]">
          <Suspense fallback={null}>
            <Canvas
              // shadows
              camera={{ fov: 75, position: [-1, 2, 7] }}
              dpr={dpr}
              frameloop={frameloop}
              ref={canvasRef}
            >
              <PerformanceMonitor
                onIncline={() =>
                  setDpr(window.devicePixelRatio - window.devicePixelRatio / 2)
                }
                onDecline={() => setDpr(window.devicePixelRatio / 2)}
              >
                <Experience />
              </PerformanceMonitor>
            </Canvas>
          </Suspense>
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
