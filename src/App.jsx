import { ContactShadows, OrbitControls, PresentationControls } from "@react-three/drei";
import { Desk } from "./components/Desk";
import { Typing } from "./components/Typing";
// import ProjectsSection from "./components/Interface";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Canvas } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls} from "@react-three/drei";
import { Suspense, lazy, useRef, useState } from "react";
import { Navbar }   from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Cursor } from "./components/Cursorcomponent";
import { LoadingScreen } from "./components/LoadingScreen";
// import Home from "./components/Home";
// import AboutMe from "./components/Aboutme";
// import SkillSection from "./components/Skills";
// import Contact from "./components/Contact";

const Home = lazy(() => import('./components/Home'));
const AboutMe = lazy(() => import('./components/Aboutme'));
const SkillSection = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));


// function App() {
//   const [started, setStarted] = useState(false);
//   const isMobile = window.innerWidth <= 768;
//   return (
//     <>
//       <LoadingScreen started={started} setStarted={setStarted}/>
//       {started && <Menu />}
//       {started && <Navbar />}
//       {started && !isMobile && <Cursor/>}
//       {/* {started && <Interface/>} */}
//       <Home />
//       <AboutMe />
//       <SkillSection />
//       {/* <ProjectsSection /> */}
//       <Contact />
//     </>
//   );
// }

function App() {
  const [started, setStarted] = useState(false);
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted}/>
      {started && <Menu />}
      {/* {started && <Navbar />} */}
      {started && !isMobile && <Cursor/>}
      {started && (
        <Router>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<SkillSection />} />
            {/* <Route path="/projects" element={<ProjectsSection />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            {/* Add other routes as needed */}
          </Routes>
          </Suspense>
        </Router>
      )}
    </>
  );
}
export default App;
