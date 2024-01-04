import { ContactShadows, OrbitControls, PresentationControls } from "@react-three/drei";
import { Desk } from "./components/Desk";
import { Typing } from "./components/Typing";
import { Interface } from "./components/Interface";


import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls} from "@react-three/drei";

// function App() {
//   return (
//     <>
        
//       <Canvas >
//         <Environment preset="dawn"/>
//         <ScrollControls pages={4} damping={0.1}>
//           <Scroll html>
//             <Interface/>
//           </Scroll>
//         </ScrollControls>
//       </Canvas>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Interface/>
    </>
  );
}
export default App;
