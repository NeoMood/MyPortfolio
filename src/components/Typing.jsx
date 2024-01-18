
import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

export function Typing(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/avatar_prj.glb");

  const {animations: typinganimation} = useFBX('/animations/typing.fbx')
  typinganimation[0].name = 'typing';
  // console.log(typinganimation)

  const {actions} = useAnimations(typinganimation, group);

  useEffect(() => {
    actions["typing"].reset().play();
  }, [])

  return (
    <group {...props} ref={group} dispose={null}>
      <group >
      <group scale={1.24} position={[1.2,-0.96,0.5]} rotation={[Math.PI/2, Math.PI, Math.PI/2]}>
        <group>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            castShadow
            receiveShadow
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
          <skinnedMesh
            castShadow
            receiveShadow
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
      </group>
    </group>
    </group>
  );
}

useGLTF.preload("/models/avatar_prj.glb");
useFBX.preload('/animations/typing.fbx');
