import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import  Scene  from "./components/Bubblescene";
import {Layout } from "./components/Layout";
import { Environment, Scroll, ScrollControls} from "@react-three/drei";
import { Interface } from "./components/Interface";
import Cursor from "./components/Cursorcomponent";
import { Watermelon } from "./components/Watermelon";
import { Tsparticles } from "./components/tsparticles";

function App() {
  return (
    <>
      {/* <Cursor/> */}
        
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 60, position:[-0.2,0.1,0.2]}}>
        <Environment preset="dawn"/>
        <ScrollControls pages={4} damping={0.1}>
          
          {/* <Watermelon/> */}
          <Scroll html>
            <Interface/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
