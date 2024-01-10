// import { Image, Text, Text3D } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { animate, useMotionValue } from "framer-motion";
// import { motion } from "framer-motion-3d";
// import { atom, useAtom } from "jotai";
// import { useEffect, useRef } from "react";
// import { MeshBasicMaterial, MeshNormalMaterial } from "three";

// export const projects = [
//   {
//     title: "Ft_Transcendance",
//     image: "/images/transcendance.png",
//     url: "https://github.com/NeoMood/ft_transcendence",
//     description:
//       "A modern twist on classic Pong with 3D gameplay,\nprofile creation, friend connection, real-time chat, and\nmultiplayer matches.",
//   },
//   {
//     title: "Ft_IRC",
//     image: "/images/transcendance.png",
//     url: "https://github.com/NeoMood/ft_transcendence",
//     description:
//       "aaaaa",
//   },
//   {
//     title: "Ft_IRC",
//     image: "/images/transcendance.png",
//     url: "https://github.com/NeoMood/ft_transcendence",
//     description:
//       "aaaaa",
//   },
// ];


// export const Project = (props) => {
//   const { project, highlghited } = props;

//   const background = useRef();
//   const bgopacity = useMotionValue(0.4);

//   useEffect(() => {
//     animate(bgopacity, highlghited ? 0.7 : 0.4);
//   }, [highlghited]);

//   useFrame(() => {
//     background.current.material.opacity = bgopacity.get();
//   }, []);

//   return (
//     <group {...props} position={[0, 0.05, -0.067]} rotation-x={-Math.PI / 12}>
//       <mesh
//         position-z={-0.001}
//         onClick={() => window.open(project.url, "_blank")}
//         ref={background}
//       >
//         <planeGeometry args={[0.15, 0.07]} />
//         <meshBasicMaterial color="black" transparent opacity={0.1} />
//       </mesh>
//       <Image
//         scale={[0.142, 0.092, 0.092]}
//         url={project.image}
//         toneMapped={false}
//       />
//       <Text color={"#fff"} scale={0.06} fontSize={0.2} position={[-0.13, 0.05, 0]} strokeColor={"black"}>{project.title}</Text>
//             <Text color={"#fff"} scale={0.05} fontSize={0.1} position={[-0.13, 0.02, 0]} strokeColor={"black"}>{project.description}</Text>
//       {/* <Text3D>
//                 {project.title}
//                 <meshNormalMaterial />
//             </Text3D> */}
//     </group>
//   );
// };

// export const currentProjectAtom = atom(Math.floor(projects.length / 2));

// export const Projects = () => {
//   const { viewport } = useThree();
//   const [currentProject] = useAtom(currentProjectAtom);
//   return (
//     <group>
//       {
//       projects.map((project, index) => {
//         return (
//           <motion.group
//             key={"project_" + index}
//             position={[index * 0.25, 0, 0]}
//             animate={{
//                 x: 0 + (index - currentProject) * 0.25,
//                 y: currentProject === index ? 0 : 0,
//                 z: currentProject === index ? 0 : 0,
//             }}
//           >
//             <Project project={project} highlighted={index === currentProject} />
//           </motion.group>
//         );
//       })
//       }
//     </group>
//   );
// };
