import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 60 }}>
      <color attach="background" args={['#87CEEB']} />
      <Experience />
    </Canvas>
  );
}

export default App;
