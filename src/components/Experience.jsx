import { Environment, Float, Grid, MeshReflectorMaterial, OrbitControls, PresentationControls, SpotLight, Stage, useDepthBuffer } from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Iphonex } from "./Iphonex";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
import {MovingSpot} from "./Spotlights";
import { Projects } from "./projects";
import { Canvas } from "@react-three/fiber";




export const Experience = () => {
  return (
    <div className="bg-[#006DAA] w-screen h-screen ">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 60, position:[-0.2,0.1,0.2]}}>
        {/* <ScrollControls pages={4} damping={0.1}></ScrollControls> */}
       <ambientLight intensity={0.5} />
       <hemisphereLight intensity={0.5} />
      <fog attach="fog" args={['#87CEEB', 2, 20]} />
      {/* <Grid /> */}

      {/* <OrbitControls/>
      <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[0, 1, 0.4]} />
      <MovingSpot depthBuffer={depthBuffer} color="#b00c3f" position={[1, 1, -0.4]} /> */}
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 3, tension: 200 }}
        rotation={[0, 0, 0]}
        polar={[0, Math.PI / 2]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
          {/* <Lamp/> */}
          <Avatar  position={[0,0,0.1]} rotation-y={Math.PI}/>
          {/* <Stage environment={"dawn"} intensity={0.1} shadows={"contact"}> */}
            <Float
              speed={2}
              rotationIntensity={0.01}
              floatIntensity={0.1} 
              floatingRange={[0, 0.2]}
            >
              <group position-y={0.01}>
                <Macbook/>
                <Projects/>
              </group>
            </Float>
          {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={0.3}
              mixStrength={40}
              roughness={0.3}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
              />
          </mesh> */}
          </PresentationControls>

          
      </Canvas>
    </div>
  );
};
