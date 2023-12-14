import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Layout } from "./components/Layout";

function App() {
  return (
    <>
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 60, position:[-0.2,0.10,0.2]}}>
      <color attach="background" args={['#87CEEB']} />
      <Experience />
    </Canvas>
    <Layout/>
    </>
  );
}

export default App;
