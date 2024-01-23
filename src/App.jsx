import { ContactShadows, OrbitControls, PresentationControls } from "@react-three/drei";
import { Desk } from "./components/Desk";
import { Typing } from "./components/Typing";
import { Interface } from "./components/Interface";


import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls} from "@react-three/drei";
import { useRef, useState } from "react";
import { Navbar }   from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Cursor } from "./components/Cursorcomponent";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [started, setStarted] = useState(false);
  const isMobile = window.innerWidth <= 768;
  console.log(isMobile);
  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted}/>
      {started && <Menu />}
      {started && <Navbar />}
      {started && !isMobile && <Cursor/>}
      {started && <Interface/>}
    </>
  );
}
export default App;
