import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import SectionWrapper from '../layout/SectionWrapper'
import { techStack } from '../../data/techStack'
import TechOrbit from './TechOrbit'

export default function TechStackSection() {
  return (
    <SectionWrapper
      id="tech"
      eyebrow="Creative Stack"
      title="The tools I build with orbit around experimentation, motion, and clarity."
      subtitle="This section keeps the energy high with floating technology tiles in 3D space instead of another flat skills list."
    >
      <div className="grid gap-6 sm:gap-7 md:gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div data-reveal className="glass-panel rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-4 sm:p-5 md:p-6 lg:p-8 shadow-glass">
          <div className="h-[280px] sm:h-[350px] md:h-[420px] overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(124,140,255,0.18),transparent_35%),linear-gradient(180deg,#0E1630,#131E37)]">
            <Canvas shadows dpr={[1, 1.75]}>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={38} />
              <ambientLight intensity={0.9} />
              <directionalLight position={[3, 4, 5]} intensity={1.8} color="#F3F6FF" />
              <pointLight position={[-3, -1, 2]} intensity={1.2} color="#A46DFF" />
              <pointLight position={[2, 1, 3]} intensity={1.1} color="#FFC38B" />
              <TechOrbit items={techStack} />
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-4">
          {techStack.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.name} data-reveal className="glass-panel rounded-[18px] sm:rounded-[20px] md:rounded-[24px] p-4 sm:p-5 shadow-soft">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-white/10 flex-shrink-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-text" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-sm sm:text-lg text-text">{item.name}</p>
                    <p className="text-xs sm:text-sm text-muted">{item.level}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] sm:tracking-[0.28em] text-primary flex-shrink-0">0{index + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
