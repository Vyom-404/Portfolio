# Vyom Gupta — 3D Storytelling Portfolio

A cinematic portfolio starter built with:
- React + Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion
- Three.js via React Three Fiber + Drei
- Lenis smooth scrolling

## Run locally

```bash
npm install
npm run dev
```

## Notes

- The avatar is currently a stylized procedural 3D character built directly in code so the project runs without needing a GLB file.
- You can later replace `src/components/avatar/AvatarModel.jsx` with a real GLB/GLTF avatar loaded through `useGLTF`.
- Replace placeholder GitHub, LinkedIn, email, resume, and project links with your real links.
- The contact form UI is ready, but submission is not wired to EmailJS/Formspree yet.

## Recommended next upgrades

1. Swap in a Ready Player Me / Mixamo avatar.
2. Add real project screenshots or live previews.
3. Connect the contact form to EmailJS or Formspree.
4. Add mobile menu behavior in the navbar.
5. Add sound effects with a mute toggle if you want extra cinematic polish.
