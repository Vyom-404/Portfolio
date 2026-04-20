# 🎬 Vyom Gupta — 3D Storytelling Portfolio

A **cinematic, fully responsive developer portfolio** featuring interactive 3D elements, smooth animations, AI-powered chatbot, and an immersive storytelling experience. Built with modern web technologies for exceptional performance and user experience across all devices.

**Live Demo:** [https://portfolio-murex-five-j47izxvdwi.vercel.app/::target:blank]

---

## ✨ Features

### 🎬 **Cinematic Experience**
- **3D Loading Screen** - Rotating wireframe cube with orbiting particles
- **Custom Cursor** - Glowing interactive cursor with hover effects
- **Smooth Scrolling** - Lenis-integrated scroll behavior for fluid navigation
- **Cinematic Animations** - GSAP-powered scroll animations with ScrollTrigger
- **Motion Effects** - Framer Motion for component transitions and staggered reveals

### 🤖 **Interactive Chatbot**
- **Preset Answers** - Quick responses to common questions
- **Scrollable Chat** - Full message history with smooth scrolling
- **Real-time Interaction** - Dynamic messaging interface
- **Responsive Design** - Works on all screen sizes
- **Quick Access** - Floating button for instant chat

### 🎮 **Interactive 3D Elements**
- **Interactive Avatar** - Three.js character with dynamic lighting
- **Tech Stack Visualization** - 3D orbiting technology showcase
- **Background Effects** - Animated orbs and particle systems
- **Responsive Canvas** - Optimized rendering for all devices

### 📱 **Fully Responsive Design**
- Mobile-first approach with breakpoints for all devices
- Phones (320px+), Tablets (640px+), Desktops (1024px+)
- Touch-friendly interface (44px minimum targets)
- Landscape orientation support
- Accessibility: reduced motion support
- Mobile menu with smooth animations

### 🎯 **Key Sections**
- **Hero** - Cinematic intro with 3D avatar and smooth scroll buttons
- **Story** - Personal narrative with characteristic chips and hover effects
- **Projects** - Portfolio showcase with tech stacks
- **Tech Stack** - 3D orbital visualization of technologies
- **Contact** - Email form with social links
- **Chatbot** - AI assistant for quick answers

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS 3 |
| **Animations** | GSAP, ScrollTrigger, Framer Motion, Lenis |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Icons** | Lucide React |
| **Build Tool** | Vite |
| **Package Manager** | npm |

---

## 📁 Project Structure

```
vyom-3d-portfolio/
├── src/
│   ├── components/
│   │   ├── avatar/                  # 3D avatar scene & speech bubble
│   │   ├── chatbot/                 # Chatbot & contact form
│   │   │   ├── Chatbot.jsx
│   │   │   └── ChatbotContactForm.jsx
│   │   ├── contact/                 # Contact section
│   │   ├── effects/                 # Background orbs, particles, custom cursor
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── BackgroundOrbs.jsx
│   │   │   └── Particles.jsx
│   │   ├── intro/                   # Story section
│   │   ├── layout/                  # Navigation & page structure
│   │   │   ├── Navbar.jsx           # Fixed header with mobile menu
│   │   │   └── SectionWrapper.jsx
│   │   ├── loader/                  # Cinematic loading screen
│   │   │   ├── CinematicLoader.jsx
│   │   │   └── Loader3D.jsx
│   │   ├── projects/                # Projects showcase
│   │   └── tech/                    # Tech stack visualization
│   ├── data/
│   │   ├── projects.js              # Project data
│   │   ├── techStack.js             # Technology stack
│   │   └── chatbotReplies.js        # Chatbot responses
│   ├── hooks/
│   │   ├── useParallax.js           # Parallax scroll effect
│   │   └── useScrollStory.js        # Story scroll trigger
│   ├── pages/
│   │   └── Home.jsx                 # Main page
│   ├── styles/
│   │   └── index.css                # Global styles & media queries
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── favicon.svg                  # VG. logo favicon
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.0.0 or higher
- **npm** or **yarn**
- **Git** (for cloning)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vyom-3d-portfolio.git
   cd vyom-3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization

#### 1. **Personal Information** (`src/data/`)
Edit `techStack.js` and `projects.js`:
```javascript
// techStack.js
export const technologies = [
  { name: 'React', icon: 'react-icon' },
  // Add your technologies
]

// projects.js
export const projects = [
  {
    title: 'Project Name',
    description: '...',
    tech: ['React', 'Node.js'],
    links: { github: '...', live: '...' }
  },
  // Add your projects
]
```

#### 2. **Social Links** (`src/components/contact/ContactSection.jsx`)
```javascript
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  // Update with your links
]
```

#### 3. **Colors & Theme** (`tailwind.config.js`)
```javascript
colors: {
  primary: '#7C8CFF',      // Main accent color
  secondary: '#A46DFF',    // Secondary accent
  warm: '#FFC38B',         // Warm accent (orange)
  text: '#F3F6FF',         // Primary text
  muted: '#AAB4D4',        // Muted text
  // Customize these colors
}
```

#### 4. **Favicon** 
Replace `public/favicon.svg` with your own SVG logo

---

## 🎮 Component Guide

### **Navbar** (`src/components/layout/Navbar.jsx`)
- Fixed header with smooth scroll-to functionality
- Mobile menu toggle (visible on small screens)
- Responsive text sizing
- Auto-closes menu when navigating
- Smooth GSAP animations

### **Cinematic Loader** (`src/components/loader/CinematicLoader.jsx`)
- 3D rotating cube background (on desktop)
- Animated progress bar with gradient
- Text entrance animations
- Mobile-optimized (hidden 3D on small screens)
- 2.5-second display duration

### **Custom Cursor** (`src/components/effects/CustomCursor.jsx`)
- Glowing circular cursor with gradient
- Hover effects on interactive elements
- Click pulse animation
- Desktop-only (hidden on mobile/touch)
- Z-index 999999 (always visible)

### **Chatbot** (`src/components/chatbot/Chatbot.jsx`)
- Floating button (bottom-right)
- Scrollable message history
- Preset question buttons
- Interactive messaging interface
- Hidden during loading screen

### **Avatar Scene** (`src/components/avatar/AvatarScene.jsx`)
- 3D character with procedural animation
- Responsive sizing (280px-720px height)
- Speech bubble positioning
- Dynamic lighting effects

---

## 📱 Responsive Design

### Breakpoints
| Device | Width | Breakpoint |
|--------|-------|-----------|
| Extra Small Phones | 320-374px | xs |
| Small Phones | 375-479px | sm |
| Standard Phones | 480-639px | sm |
| Tablets | 640-1023px | md |
| Desktops | 1024-1279px | lg |
| Large Screens | 1280-1535px | xl |
| Ultra-Wide | 1536px+ | 2xl |

### Responsive Features
✅ Mobile-first design approach  
✅ Touch-friendly target sizes (44px minimum)  
✅ Responsive typography scaling  
✅ Adaptive spacing and padding  
✅ Landscape orientation support  
✅ Reduced motion support for accessibility  
✅ Optimized 3D rendering for mobile  

---

## 🎨 Customization Examples

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B6B', // Change from blue to red
}
```

### Adjust Animation Speed
Edit specific component files or `tailwind.config.js`:
```javascript
animation: {
  shimmer: 'shimmer 2s linear infinite', // Faster
}
```

### Modify Loader Duration
Edit `src/components/loader/CinematicLoader.jsx`:
```javascript
const finishTimer = window.setTimeout(() => {
  // Animations here
}, 3000) // Change 2300 to desired milliseconds
```

### Hide Custom Cursor on Certain Pages
In `CustomCursor.jsx`, add page detection:
```javascript
if (isTouchDevice || isSpecificPage) return null
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```


### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/',
}
```

---

## 📊 Performance Tips

✅ **Lazy Load Components** - Use React.lazy() for heavy sections  
✅ **Optimize Images** - Use WebP format where possible  
✅ **Minimize 3D** - Reduce particle count on mobile  
✅ **Cache Assets** - Configure service workers  
✅ **Monitor Performance** - Use Lighthouse or WebPageTest  

---

## 🐛 Troubleshooting

### **Avatar not rendering**
- Ensure WebGL is enabled in browser
- Check GPU acceleration in settings
- Verify Three.js dependencies are installed
```bash
npm install three @react-three/fiber @react-three/drei
```

### **Chatbot not scrolling**
- Check if scroll container has `overflow-y-scroll` class
- Verify `touch-auto` is enabled for mobile
- Clear browser cache and reload

### **Custom cursor not showing**
- Confirm device is not touch-enabled (use DevTools)
- Check z-index is set to 999999
- Verify `pointer-events-none` isn't blocking it

### **3D animations stuttering**
- Disable browser extensions (ad blockers, etc.)
- Close background applications
- Test on different browser
- Reduce particle count in effects

### **Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---



## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com/docs)
- [Three.js Guide](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
---

##  Acknowledgments

- **GSAP** - For powerful animation library
- **Framer Motion** - For smooth component animations
- **Three.js** - For 3D graphics
- **Tailwind CSS** - For utility-first styling
- **React** - For component-based UI framework

---

## 👨‍💻 Author

**Vyom Gupta** - Student Developer

### Connect With Me
- 🔗 [GitHub](https://github.com/Vyom-404)
- 💼 [LinkedIn](https://linkedin.com/in/vyom-gupta)
- 📧 [Email](mailto:vyomg20082005@gmail.com)

---

## 🤝 Contributing

Found a bug or want to improve something? 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support

For questions or issues:
- Use the contact form in the portfolio

---

## ⭐ If you like this project, please give it a star!

Made with ❤️ by Vyom and ✨ cinematic magic

©️ ALL RIGHTS RESERVED 
