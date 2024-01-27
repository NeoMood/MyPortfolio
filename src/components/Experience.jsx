import {
  Environment,
  Float,
  Grid,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  SpotLight,
  Stage,
  Stars,
  useDepthBuffer,
} from "@react-three/drei";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
// import { Avatar } from "./test";
import { Projects } from "./Interface";
import { Canvas, useThree } from "@react-three/fiber";
import { MeshBasicMaterial } from "three";
import { useMediaQuery } from "react-responsive";
// import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";

export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const SceneScalingFactor = Math.min(window.innerWidth / 19, 26);
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={["#272730", 10, 25]} />

      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 3, tension: 200 }}
        rotation={[0, 0, 0]}
        polar={[0, Math.PI / 2]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        {/* <Lamp/> */}
        <Avatar
          position={[0, -2.1, 2]}
          rotation-y={Math.PI}
          scale={SceneScalingFactor}
        />
        {/* <Stage environment={"dawn"} intensity={0.1} shadows={"contact"}> */}
        <Float
          speed={5}
          rotationIntensity={0.01}
          floatIntensity={0.15}
          floatingRange={[0, 1.1]}
        >
          <group position-y={-2} scale={SceneScalingFactor}>
            <Macbook />
            <Projects />
          </group>
        </Float>
        {isMobileDevice ? (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]}>
            <planeGeometry args={[170, 30]} />
            <meshBasicMaterial color="#171720" />
          </mesh>
        ) : (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]}>
            <planeGeometry args={[170, 30]} />
            <MeshReflectorMaterial
              blur={[300, 30]}
              resolution={1080}
              mixBlur={0.5}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>
        )}
        <Environment preset="sunset" />
        {!isMobileDevice && (<Stars radius={5} depth={50} count={800} factor={2} saturation={0} fade />)}
      </PresentationControls>
      {/* <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0.4} />
            </EffectComposer> */}
    </>
  );
};
