import { ContactShadows, Environment, Float, Grid, MeshReflectorMaterial, OrbitControls, PerspectiveCamera, PresentationControls, SpotLight, Stage, useDepthBuffer } from "@react-three/drei";
import { Watermelon } from "./Watermelon";
import { Iphonex } from "./Iphonex";
import { Macbook } from "./Macbook";
import { Avatar } from "./Avatar";
import {MovingSpot} from "./Spotlights";
import { Projects } from "./projects";
import { Canvas } from "@react-three/fiber";
import { Desk } from "./Desk";
import { Typing } from "./Typing";




const Deskscene = () => {
  return (
    <Canvas camera={{ fov: 60 }}>
        {/* <ambientLight intensity={0.3} /> */}
        <perspectiveCamera makeDefault position={[0, 0.2, 2]} fov={75} lookAt={[0,0,0]}>

      <pointLight position={[0, 3, 0]} intensity={1} />
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 3, tension: 200 }}
        rotation={[0, 0, 0]}
        polar={[0, Math.PI / 2]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
            {/* <OrbitControls/> */}
            <group rotation-x={[Math.PI/9]} rotation-y={[-Math.PI/4]}>
            <Desk position={[0, -1, 0]} rotation-y={[Math.PI]} />
            <Typing/>
            </group>
            <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
            <Environment preset="warehouse"/>
          </PresentationControls>
              {/* </PerspectiveCamera> */}
            </perspectiveCamera>

          
      </Canvas>
  );
};

export default Deskscene;