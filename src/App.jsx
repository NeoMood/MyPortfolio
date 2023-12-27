import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import  Scene  from "./components/Bubblescene";
import {Layout } from "./components/Layout";
import { Scroll, ScrollControls, OrbitControls, MeshWobbleMaterial } from "@react-three/drei";
import { Interface } from "./components/Interface";
import waaarkLuge from 'https://cdn.skypack.dev/@waaark/luge';

function App() {
  return (
    <>
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 60, position:[-0.2,0.1,0.2]}}>
      <color attach="background" args={['#87CEEB']} />
      <ScrollControls pages={4} damping={0.1}>
        {/* <Experience /> */}
        {/* <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
        <Scene/>
        <Scroll html>
          <Interface/>
        </Scroll>
      </ScrollControls>
    </Canvas>
    {/* <Layout/> */}
    </>
  );
}

export default App;
