import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RotatingGeometry({ progress }) {
  const groupRef = useRef(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.003
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.z += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main cube */}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshPhongMaterial
          color="#7c8cff"
          emissive="#5a6fd8"
          emissiveIntensity={0.5}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#a0b1ff" wireframe />
      </mesh>

      {/* Orbiting particles based on progress */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((Date.now() * 0.001 + i * Math.PI * 0.67)) * 2.5,
            Math.sin((Date.now() * 0.0008 + i * Math.PI * 0.67)) * 1.5,
            Math.sin((Date.now() * 0.0009 + i * Math.PI * 0.67)) * 2,
          ]}
        >
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhongMaterial color={['#ffc38b', '#f3f6ff', '#d8defe'][i]} />
        </mesh>
      ))}
    </group>
  )
}

export default function Loader3D({ progress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.5], fov: 50 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, 5]} intensity={0.3} />
      <RotatingGeometry progress={progress} />
    </Canvas>
  )
}
