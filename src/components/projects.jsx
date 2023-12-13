import { Image, Text, Text3D } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { MeshBasicMaterial, MeshNormalMaterial } from "three";

export const projects = [
    {
        title : "Ft_Transcendance",
        image: "/images/transcendance.png",
    }
];

const Project = (props) => {
    const {project} = props;

    return (
        <group {...props} position={[0, 1.05, -0.067]} rotation-x={-Math.PI/12}>
            <mesh position-z={-0.001} >
                <planeGeometry args={[0.15, 0.07]}/>
                <meshBasicMaterial color="balck" transparent opacity={0.4}/>       
            </mesh>
            <Image scale={[0.142,0.092,0.092]} url={project.image} toneMapped={false} />
            <Text color={"#151B54"} scale={0.1} fontSize={0.2} position={[0, 0.07, 0]} strokeColor={"black"}>{project.title}</Text>
            {/* <Text3D>
                {project.title}
                <meshNormalMaterial />
            </Text3D> */}
        </group>
    )
}

export const Projects = () => {
    const { viewport } = useThree();
    return (
      <group>
        {projects.map((project, index) => {
          return (
            <motion.group key={"project_" + index}>
              <Project project={project} />
            </motion.group>
          );
        })}
      </group>
    );
  };
