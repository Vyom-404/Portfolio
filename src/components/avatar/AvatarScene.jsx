import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import AvatarModel from './AvatarModel'

function CameraDrift() {
  const cameraRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    state.camera.position.x = Math.sin(t * 0.25) * 0.25
    state.camera.position.y = 1.25 + Math.sin(t * 0.35) * 0.06
    state.camera.lookAt(0, 0.9, 0)
  })

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1.25, 6.5]} fov={32} />
}

function SceneFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.25, 0]} receiveShadow>
      <circleGeometry args={[7, 64]} />
      <meshStandardMaterial color="#0f1730" roughness={0.95} />
    </mesh>
  )
}

export default function AvatarScene({ gesture = 'wave' }) {
  return (
    <Canvas shadows dpr={[1, 1.75]}>
      <CameraDrift />
      <fog attach="fog" args={['#0B1020', 8, 18]} />
      <color attach="background" args={['#0B1020']} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.8} color="#f4e7ff" castShadow />
      <directionalLight position={[-4, 2, 2]} intensity={1.1} color="#ffc38b" />
      <pointLight position={[0, 2, 4]} intensity={1.4} color="#7C8CFF" />
      <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.55}>
        <AvatarModel gesture={gesture} />
      </Float>
      <SceneFloor />
      <Environment preset="city" />
    </Canvas>
  )
}
