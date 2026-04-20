import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float } from '@react-three/drei'

export default function TechOrbit({ items }) {
  const group = useRef()
  const radii = useMemo(() => [2.15, 3.05, 3.9], [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!group.current) return
    group.current.rotation.y = t * 0.16
    group.current.rotation.x = Math.sin(t * 0.25) * 0.06
  })

  return (
    <group ref={group}>
      {items.map((item, index) => {
        const radius = radii[index % radii.length]
        const angle = (index / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = ((index % 3) - 1) * 0.8
        const Icon = item.icon

        return (
          <Float key={item.name} speed={1.4 + index * 0.05} rotationIntensity={0.2} floatIntensity={0.4}>
            <mesh position={[x, y, z]} castShadow>
              <boxGeometry args={[1.4, 1.4, 0.22]} />
              <meshStandardMaterial color={index % 2 === 0 ? '#1B2645' : '#18233E'} roughness={0.3} metalness={0.22} />
              <Html center transform distanceFactor={7.5}>
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[22px] border border-white/10 bg-white/10 text-text backdrop-blur-lg">
                  <Icon className="mb-2 h-7 w-7 text-text" />
                  <span className="text-[11px] font-medium text-muted">{item.name}</span>
                </div>
              </Html>
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}
