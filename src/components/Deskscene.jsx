import {
  Image,
  Text,
  ContactShadows,
  Environment,
  PresentationControls,
  OrbitControls,
  SoftShadows
} from "@react-three/drei";
import { Desk } from "./Desk";
import { Typing } from "./Typing";
// import { Typing } from "./test2";
import { Suspense } from "react";
// import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";

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
  const DeskScalingFactor = Math.min(window.innerWidth / 1500, 1);
  const DeskPositionFactor = window.innerWidth / 3000;
  const isSmallScreen = window.innerWidth < 780;
  return (
    <>
      {/* <ambientLight intensity={0.3} /> */}
      <perspectiveCamera
        makeDefault
        position={[1, 0.3, 2]}
        fov={75}
        lookAt={[0, 0, 0]}
        // near={0.01}
        // far={100}
      >
        <pointLight position={[0, 3, 0]} intensity={0.6} />
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
              position-x={isSmallScreen ? -1 : DeskPositionFactor - 0.4}
              position-y={isSmallScreen ? 0.6 : 0.04}
              rotation-x={[Math.PI / 9]}
              rotation-y={[-Math.PI / 4]}
              scale={DeskScalingFactor}
            >
              {/* <group castShadow receiveShadow > */}
              <Desk position={[0, -1, 0]} rotation-y={[Math.PI]} />
              {/* <Screen/> */}
              <Typing />
            </group>
          </Suspense>
          <Environment preset="warehouse" />
        </PresentationControls>
          {/* <SoftShadows/> */}
        {/* </PerspectiveCamera> */}
      </perspectiveCamera>
      {/* <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0.2} />
      </EffectComposer> */}
    </>
  );
};

export default Deskscene;
