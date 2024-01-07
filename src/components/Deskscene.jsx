import {
  Image,
  Text,
  ContactShadows,
  Environment,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Iphonex } from "./Iphonex";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
import { MovingSpot } from "./Spotlights";
import { Projects } from "./projects";
import { Canvas } from "@react-three/fiber";
import { Desk } from "./Desk";
import { Typing } from "./Typing";
import { Suspense } from "react";
import { Bloom } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";

// export const projects = [
//   {
//       title : "Ft_Transcendance",
//       image: "/images/transcendance.png",
//       url: "https://github.com/NeoMood/ft_transcendence",
//       description: "A modern twist on classic Pong with 3D gameplay,\nprofile creation, friend connection, real-time chat, and\nmultiplayer matches."
//   }
// ];

// const Project = (props) => {
//     const {project} = props;

//     return (
//         <group {...props} position={[0, 0.05, -0.067]} rotation-x={-Math.PI}>
//             <mesh position-z={-0.001} onClick={() => window.open(project.url, "_blank")}>
//                 <planeGeometry args={[0.15, 0.07]}/>
//                 <meshBasicMaterial color="black" transparent opacity={0.4}/>
//             </mesh>
//             <Image scale={[0.142,0.092,0.092]} url={"/images/transcendance.png"} toneMapped={false} />
//         </group>
//     )
// }

const Screen = () => {
  return (
    <>
      {/* <axesHelper/> */}
      <group rotation-x={[-Math.PI / 12]} position={[0.06, 0.4, 0.58]}>
        <mesh>
          <planeGeometry args={[0.12, 0.07]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        <Image
          scale={[0.7, 0.4, 1]}
          url={"/images/transcendance.png"}
          toneMapped={false}
        />
      </group>
    </>
  );
};

const Deskscene = () => {
  const viewport = useThree((state) => state.viewport);
  const DeskScalingFactor = Math.min(window.innerWidth / 1300, 1);
  const DeskPositionFactor = window.innerWidth / 3000;
  const isSmallScreen = window.innerWidth < 768;
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <perspectiveCamera
        makeDefault
        position={[1, 0.3, 2]}
        fov={75}
        lookAt={[0, 0, 0]}
      >
        <pointLight position={[0, 3, 0]} intensity={1} />
        <PresentationControls
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 3, tension: 200 }}
          rotation={[0, 0, 0]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          {/* <OrbitControls/> */}
          <Suspense fallback={null}>
            <group
              castShadow
              receiveShadow
              position-x={isSmallScreen ? -0.9 : DeskPositionFactor - 0.6}
              position-y={isSmallScreen ? 0.6 : 0.1}
              rotation-x={[Math.PI / 9]}
              rotation-y={[-Math.PI / 4]}
              scale={DeskScalingFactor}
            >
              {/* <group castShadow receiveShadow > */}
              <Desk position={[0, -1, 0]} rotation-y={[Math.PI]} />
              {/* <Desk position={[0, -1, 0]} /> */}
              {/* <Screen/> */}
              <Typing />
            </group>
          </Suspense>
          <Environment preset="warehouse" />
          <ContactShadows
            frames={1}
            scale={5}
            position={[0, -1, 0]}
            far={1}
            blur={5}
            opacity={0.5}
            color="#204080"
          />
        </PresentationControls>
        {/* </PerspectiveCamera> */}
      </perspectiveCamera>
      <Bloom />
    </>
  );
};

export default Deskscene;
