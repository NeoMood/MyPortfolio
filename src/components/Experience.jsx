import { Environment, Float, Grid, MeshReflectorMaterial, OrbitControls, PresentationControls, SpotLight, Stage, Stars, useDepthBuffer } from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Iphonex } from "./Iphonex";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
import {MovingSpot} from "./Spotlights";
import { Projects } from "./Interface";
import { Canvas, useThree } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer } from "@react-three/postprocessing";




export const Experience = () => {
  const viewport = useThree((state) => state.viewport);
  const SceneScalingFactor = Math.min(window.innerWidth / 30, 25)

  return (
    <>
      {/* <div className="bg-gradiant w-screen h-screen ">
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 60, position:[-0.2,0.1,0.2]}}> */}
          {/* <ScrollControls pages={4} damping={0.1}></ScrollControls> */}
        <ambientLight intensity={0.1} />
        {/* <hemisphereLight intensity={0.2} /> */}
        <fog attach="fog" args={['#272730', 10, 25]} />
        {/* <Grid /> */}
        {/* <OrbitControls/> */}
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
            <Avatar  position={[0,-1.5,2]} rotation-y={Math.PI} scale={SceneScalingFactor }/>
            {/* <Stage environment={"dawn"} intensity={0.1} shadows={"contact"}> */}
              <Float
                speed={5}
                rotationIntensity={0.01}
                floatIntensity={0.1} 
                floatingRange={[0, 1]}
                >
                <group position-y={-1.3} scale={SceneScalingFactor}>
                  <Macbook/>
                  <Projects/>
                </group>
              </Float>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
              <planeGeometry args={[170, 30]} />
              {/* <MeshReflectorMaterial
              blur={[200, 100]}
              resolution={2048}
              mixBlur={0.1}
              mixStrength={40}
              roughness={0.6}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#070710"
              metalness={0.5}
              /> */}
              <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={0.6}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
            </mesh>
            <Environment preset="sunset" />
            <Stars radius={5} depth={50} count={1000} factor={2} saturation={0} fade />
            </PresentationControls>
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={0.4} />
            </EffectComposer>


          </>
          
    //   </Canvas>
    // </div>
  );
};
