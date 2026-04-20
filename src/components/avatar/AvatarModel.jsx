import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Limb({ position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], color = '#7C8CFF' }) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow>
      <capsuleGeometry args={[0.18, 0.7, 6, 12]} />
      <meshStandardMaterial color={color} roughness={0.45} metalness={0.1} />
    </mesh>
  )
}

export default function AvatarModel({ gesture = 'wave' }) {
  const group = useRef()
  const head = useRef()
  const leftArm = useRef()
  const rightArm = useRef()
  const bodyColor = useMemo(() => new THREE.Color('#7C8CFF'), [])
  const skinColor = useMemo(() => new THREE.Color('#FFD8BC'), [])
  const dark = useMemo(() => new THREE.Color('#121A2F'), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!group.current) return

    group.current.position.y = Math.sin(t * 1.2) * 0.08
    group.current.rotation.y = Math.sin(t * 0.45) * 0.15
    head.current.rotation.z = Math.sin(t * 0.9) * 0.05

    if (gesture === 'wave') {
      rightArm.current.rotation.z = -1 + Math.sin(t * 3.5) * 0.25
      rightArm.current.rotation.x = 0.4 + Math.sin(t * 2.8) * 0.1
    } else if (gesture === 'point') {
      rightArm.current.rotation.z = -1.15
      rightArm.current.rotation.x = -0.25
    } else {
      rightArm.current.rotation.z = -0.25 + Math.sin(t * 1.4) * 0.08
      rightArm.current.rotation.x = 0.15
    }

    leftArm.current.rotation.z = 0.25 + Math.sin(t * 1.1) * 0.06
  })

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      <mesh ref={head} position={[0, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.7} />
      </mesh>

      <mesh position={[0, 1.82, 0.36]}>
        <sphereGeometry args={[0.54, 28, 28]} />
        <meshStandardMaterial color={dark} roughness={0.9} />
      </mesh>

      <mesh position={[0, 0.9, 0]} scale={[1.1, 1.35, 0.72]} castShadow>
        <boxGeometry args={[1.15, 1.5, 0.7]} />
        <meshStandardMaterial color={bodyColor} roughness={0.45} metalness={0.15} />
      </mesh>

      <mesh position={[0, 1.15, 0.38]} castShadow>
        <boxGeometry args={[0.55, 0.22, 0.15]} />
        <meshStandardMaterial color={'#F3F6FF'} roughness={0.4} />
      </mesh>

      <group ref={leftArm} position={[-0.72, 1.2, 0]}>
        <Limb rotation={[0.1, 0, 0.35]} color="#A46DFF" />
      </group>
      <group ref={rightArm} position={[0.72, 1.2, 0]}>
        <Limb rotation={[0.1, 0, -0.8]} color="#FFC38B" />
      </group>

      <group position={[-0.3, -0.28, 0]}>
        <Limb rotation={[0, 0, 0.08]} scale={[1, 1.1, 1]} color="#1B2645" />
      </group>
      <group position={[0.3, -0.28, 0]}>
        <Limb rotation={[0, 0, -0.08]} scale={[1, 1.1, 1]} color="#1B2645" />
      </group>
    </group>
  )
}
