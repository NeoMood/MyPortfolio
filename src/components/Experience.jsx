import { Environment, OrbitControls, SoftShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Avatar2 } from "./Avatar2";
import { Watermelon } from "./Watermelon";
import { Background } from "./Background";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background/>
      <group position-y={[-1]}>
        {/* <Avatar /> */}
        <Watermelon />
      </group>
      {/* <Environment preset="sunset"/> */}
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
    </>
  );
};
