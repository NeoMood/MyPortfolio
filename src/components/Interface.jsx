import React, { useEffect, Suspense, useRef, useState } from "react";
import { Experience } from "./Experience";
import Typist from "react-typist-component";
import { Tsparticles } from "./tsparticles";
import Deskscene from "./Deskscene";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Project } from './projects';
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { Image, Text } from "@react-three/drei";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import SplitType from "split-type";
import { Home } from "./Home";
import { Perf } from "r3f-perf";
// import { SplitText } from 'gsap/SplitText'

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
        {/* <Section id="home">
          <Test/>
        </Section> */}
      <Suspense fallback={null}>
        <Section id="home">
          <Home/>
        </Section>
      </Suspense>
      <AboutMe />
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

// export const Home = () => {
//   const containerRef = useRef(null);
//   const text = "Hi, This is";
//   const splitText = text.split("");
//   const text2 = "Saâd Gmira";
//   const splitText2 = text2.split("");

//   const staggeredAnimation = {
//     initial: { opacity: 0, y: -100, scaleX: 0 },
//     animate: { opacity: 1, y: 0, scaleX: 1 },
//     transition: { duration: 2, delay: (i) => i * 0.1 },
//   };


//   return (
//     <>
//       <Section id="home">
//         <div ref={containerRef}>
//           <div
//             className="absolute bottom-0 "
//             style={{
//               bottom: "-15px",
//               backgroundImage: `url(/wave-under.svg)`,
//               aspectRatio: 960 / 300,
//               width: "100%",
//               backgroundRepeat: "no-repeat",
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//             }}
//           ></div>

//           {/* <div className="bg-gradiant flex items-center w-screen h-screen overflow-hidden"> */}
//           <div className="bg-gradiant flex items-center justify-center sm:justify-start w-screen h-screen ">
//             <div id="mytext" className="md:pl-20 md:mt-20 ">

//               {/* <motion.div className="pl-10 text-4xl md:text-6xl font-extrabold leading-snug text-white thisis">
//                 {splitText.map((char, i) => (
//                   <motion.span
//                     initial={staggeredAnimation.initial}
//                     animate={staggeredAnimation.animate}
//                     transition={{
//                       ...staggeredAnimation.transition,
//                       delay: staggeredAnimation.transition.delay(i),
//                     }}
//                     key={i}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </motion.div>
//               <motion.div className="pl-10 text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-snug name text-[#CD853F]">
//                 {splitText2.map((char, i) => (
//                   <motion.span
//                     initial={staggeredAnimation.initial}
//                     animate={staggeredAnimation.animate}
//                     transition={{
//                       ...staggeredAnimation.transition,
//                       delay: staggeredAnimation.transition.delay(i),
//                     }}
//                     key={i}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </motion.div> */}

//               <div className="flex pl-10 text-sm lg:text-xl xl:text:2xl md:text-lg sm:text-md text-start pt-4  h-12 ">
//                 <div className=" contact_font text-white ">I'm a</div>
//                 <div className="flip">
//                   <div>
//                     <div>Front-End Developer</div>
//                   </div>
//                   <div>
//                     <div>Software engineering student</div>
//                   </div>
//                   <div>
//                     <div>Music Producer</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="ml-0 absolute w-full h-full">
//           <Canvas shadows camera={{ fov: 60 }}>
//             <Deskscene />
//           </Canvas>
//         </div>
//       </Section>
//     </>
//   );
// };

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
      gsap.fromTo(
        text,
        { backgroundSize: "100%" },
        {
          backgroundSize: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: text,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
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
              C<span className="spananimation">C 90%</span>
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
          
        </div>
      </div>
    </>
  );
};

export const AboutMe = () => {
  return (
    <Section id="about">
      <>
        <div className="relative flex items-start justify-center flex-col px-4 mx-auto sm:px-6 lg:px-8 skills-bg-gradiant w-screen h-screen overflow-hidden">
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
          <div className="flex-col items-center md:flex-row">
            <div className="pl-20">
              <h1 className="font-bold leading-tight text-white text-5xl sm:text-6xl lg:text-7xl contact_font text-center md:text-left ">
                {" "}
                About <span className="text-[peru]">Me</span>
              </h1>
              <p className="max-w-lg mt-3 text-2xl text-center md:text-left leading-relaxed text-white md:mt-8">
                Innovative software engineer skilled in crafting compelling web
                applications and seamless user interfaces. Proficient in
                seamlessly integrating captivating 3D environments, with a
                passion for applying front-end or full-stack skills to
                innovative projects.
              </p>

              <p className="mt-4 text-sm text-white contact_font md:mt-8">
                <span className="relative"> Wanna Talk? </span>
              </p>
                <a
                  href="#contact"
                  className={`text-white text-center text-md rounded-xl block py-2 bg-[peru] w-[8rem] contact_font hover:bg-green-500`}
                >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </>
    </Section>
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
      <div className="flex justify-center bg-gradiant w-screen h-screen">
        <div className="text-6xl pt-20 font-extrabold leading-snug drop-shadow-xl text-white">
          <h1 className=""> Projects </h1>
        </div>
        <div className="absolute w-full h-full">
          <Canvas shadows camera={{ fov: 78, position: [-1, 2, 7] }}>
            {/* <Perf position="bottom-right" /> */}
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  // console.log(process.env.EMAILJS_SERVICE, process.env.EMAILJS_TEMPLATE, process.env.EMAILJS_PUBLICKEY);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9md62lb",
        "template_ouwuwee",
        form.current,
        "AuV6J6DkkXzcu1cCJ"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              title: "Thank You!",
              text: "Message sent successfully!",
              icon: "success",
            });
            setName("");
            setEmail("");
            setMessage("");
          }
        },
        (error) => {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      );
  };

  return (
    <>
      <div className="relative flex justify-center items-center sm:pl-40 sm:justify-start skills-bg-gradiant w-screen h-screen">
        <div
          className="absolute top-0 left-0"
          style={{
            backgroundImage: `url(/wave-contact.svg)`,
            aspectRatio: 960 / 300,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <div className="flex rounded-lg p-8 w-[400px] h-[400px] flex-col bg-[peru]"> */}
        <div className="flex rounded-lg p-5 w-[400px] h-[400px] flex-col z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-10 text-white text-center contact_font z-[1]">
            {" "}
            Let's <span className="text-[peru]">Talk</span>!
          </h1>
          <form onSubmit={sendEmail} ref={form}>
            <div className="mb-3">
              <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                Your Name
              </label>
              <input
                className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
                type="text"
                name="from_name"
                // placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                Your Email
              </label>
              <input
                className="rounded-lg bg-slate-700 pl-3 shadow-xl block h-[40px] w-full text-white"
                type="text"
                name="user_email"
                // placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm block mb-3 pl-1 text-white contact_font">
                Your Message
              </label>
              <textarea
                className="rounded-2xl bg-slate-700 pl-3 shadow-xl block h-[70px] w-full max-h-[150px] min-h-[70px] text-white"
                name="message"
                // placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`text-white rounded-xl block py-2 bg-[peru] w-[10rem] contact_font transition duration-500 ease-in-out ${
                !name || !email || !message
                  ? "hover:bg-slate-700 cursor-not-allowed"
                  : "hover:bg-green-500"
              }`}
              disabled={!name || !email || !message}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
