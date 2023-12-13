import { Environment, Float, Grid, MeshReflectorMaterial, OrbitControls, PresentationControls, SpotLight, Stage, useDepthBuffer } from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Iphonex } from "./Iphonex";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
import {MovingSpot} from "./Spotlights";
import { Projects } from "./projects";




export const Experience = () => {
  const numWatermelons = 100; 
  const watermelons = Array.from({ length: numWatermelons }).map((_, i) => {
    const position = [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10];
    const rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]; // Random rotation
    return <Watermelon key={i} position={position} rotation={rotation} />;
  });
  const depthBuffer = useDepthBuffer({ frames: 1 })

  return (
    <>
      <fog attach="fog" args={['#87CEEB', 5, 20]} />
      {/* <Grid /> */}

      {/* <OrbitControls/> */}
      {/* <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[3, 3, 2]} /> */}
      {/* <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 3, 0]} /> */}
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        // snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* <Lamp/> */}
          <Avatar  position={[0,-0.12,0.1]} rotation-y={Math.PI}/>
          <Stage environment={"dawn"} intensity={0.1} shadows={"contact"}>
            <Float
              speed={2}
              rotationIntensity={0.01}
              floatIntensity={0.1} 
              floatingRange={[0, 0.2]}
            >
              <Macbook/>
            <Projects/>
            </Float>
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
              />
          </mesh>
          </PresentationControls>
      {/* <axesHelper args={[5]} /> */}
    </>
  );
};
