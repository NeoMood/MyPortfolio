/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/Watermelon.glb -o src/components/Watermelon.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Watermelon(props) {
  const { nodes, materials } = useGLTF('/models/Watermelon.glb')
  return (
    <group {...props} dispose={null}>
    <mesh 
      castShadow
      receiveShadow 
      geometry={nodes.mesh_char_89.geometry} 
      material={materials._089_Watermelon} 
      scale={5} 
      rotation={[0, Math.PI*2, 0]}
    />
    </group>
  )
}

useGLTF.preload('/models/Watermelon.glb')