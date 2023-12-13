import { Environment, Float, MeshReflectorMaterial, OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Background } from "./Background";

export const Experience = () => {
  const numWatermelons = 100; 
  const watermelons = Array.from({ length: numWatermelons }).map((_, i) => {
    const position = [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10];
    const rotation = [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2]; // Random rotation
    return <Watermelon key={i} position={position} rotation={rotation} />;
  });

  return (
    <>
      <fog attach="fog" args={['#E37383', 10, 20]} />
      <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={"city"} intensity={0.6} contactShadow={false}>
            <Float
              speed={1}
              rotationIntensity={1} 
              floatIntensity={1} 
              floatingRange={[0.2, 0.3]}
            >
              {/* <Avatar /> */}
              <Watermelon/>
            </Float>
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
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
    </>
  );
};
