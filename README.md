# 🎬 Vyom Gupta — 3D Storytelling Portfolio

A cinematic, fully responsive developer portfolio featuring interactive 3D elements, smooth animations, and an immersive storytelling experience. Built with modern web technologies for exceptional performance and user experience across all devices.

---

## ✨ Features

### 🎨 **Interactive Design**
- **Cinematic Animations** - GSAP-powered scroll animations with ScrollTrigger
- **3D Avatar Scene** - Interactive Three.js character with dynamic lighting
- **Smooth Scrolling** - Lenis-integrated scroll behavior for fluid navigation
- **Motion Effects** - Framer Motion for component transitions
- **Particle System** - Dynamic background particles and floating orbs

### 📱 **Fully Responsive**
- Mobile-first design approach with breakpoints for all devices
- Optimized layouts: phones (320px+), tablets (640px+), desktops (1024px+)
- Touch-friendly interface with proper target sizes
- Landscape orientation support
- Reduced motion support for accessibility

### 🎯 **Key Sections**
- **Hero** - Cinematic intro with 3D avatar and compelling headline
- **Story** - Personal narrative with characteristic chips
- **Projects** - Showcase with staggered reveal animations
- **Tech Stack** - 3D orbiting technology visualization
- **Contact** - Email form with social links

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS 3 |
| **Animations** | GSAP, ScrollTrigger, Framer Motion |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Icons** | Lucide React |
| **Backend** | Firebase Firestore |
| **Build Tool** | Vite |

---

## 📁 Project Structure

```
vyom-3d-portfolio/
├── src/
│   ├── components/
│   │   ├── avatar/              # 3D avatar and speech bubble
│   │   ├── contact/             # Contact form section
│   │   ├── effects/             # Background orbs & particles
│   │   ├── intro/               # Story section
│   │   ├── layout/              # Navbar & section wrapper
│   │   ├── loader/              # Cinematic loading screen
│   │   ├── projects/            # Projects section
│   │   └── tech/                # Tech stack 3D visualization
│   ├── data/                    # Projects & tech stack data
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Firebase configuration
│   ├── pages/                   # Main home page
│   ├── styles/                  # Global CSS & responsive queries
│   ├── App.jsx
│   └── main.jsx
├── public/                      # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd vyom-3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see [Configuration](#-configuration) below)
   ```bash
   cp .env.example .env
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The portfolio will open at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

---

## ⚙️ Configuration

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Create a Firestore database
3. Update `.env` with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Customize Content

- **Personal Info**: Update `src/data/projects.js` and `src/data/techStack.js`
- **Social Links**: Modify URLs in `src/components/contact/ContactSection.jsx`
- **Project Links**: Add your GitHub, LinkedIn, resume, and live demo links
- **Colors**: Customize theme in `tailwind.config.js`

---

## 📱 Responsive Design

The portfolio is optimized for all screen sizes with a mobile-first approach:

| Breakpoint | Width | Use Case |
|-----------|-------|----------|
| **xs** | 320px | Extra small phones |
| **sm** | 640px | Mobile phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Desktops |
| **xl** | 1280px | Large monitors |
| **2xl** | 1536px | Ultra-wide screens |

### Media Query Features
- Responsive typography scaling (xs/sm → lg/xl)
- Adaptive spacing and padding
- Touch-friendly interactive elements (44px minimum)
- Landscape orientation optimization
- Prefers-reduced-motion accessibility support

---

## 🎮 Key Components

### Avatar Scene (`src/components/avatar/AvatarScene.jsx`)
- 3D character with procedural generation
- Camera drift animation
- Dynamic lighting system

### Project Cards (`src/components/projects/ProjectCard.jsx`)
- Responsive grid layout
- Tech stack badges
- Call-to-action buttons
- Staggered scroll animations

### Tech Stack Section (`src/components/tech/TechStackSection.jsx`)
- 3D orbital visualization
- Responsive canvas sizing
- Technology showcase cards

### Contact Form (`src/components/contact/ContactSection.jsx`)
- Fully responsive form layout
- Social media links
- Form validation
- Firebase Firestore integration

### Navbar (`src/components/layout/Navbar.jsx`)
- Fixed navigation with scroll-to functionality
- Responsive breakpoint handling
- Mobile menu icon support

### Section Wrapper (`src/components/layout/SectionWrapper.jsx`)
- Consistent section padding and spacing
- Responsive typography for headers
- SEO-friendly semantic HTML

---

## 🎨 Customization Guide

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: '#7C8CFF',      // Primary accent
  secondary: '#A46DFF',    // Secondary accent
  warm: '#FFC38B',         // Warm accent
  text: '#F3F6FF',         // Text color
  muted: '#AAB4D4',        // Muted text
}
```

### Animations
Modify animation settings in `tailwind.config.js`:
```javascript
animation: {
  float: 'float 6s ease-in-out infinite',
  drift: 'drift 10s ease-in-out infinite',
  shimmer: 'shimmer 3.5s linear infinite',
}
```

### Typography
Adjust fonts and sizes in `tailwind.config.js`:
```javascript
fontFamily: {
  heading: ['Sora', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
}
```

---

## 📊 Performance Features

- **Lazy loading** for images and components
- **Code splitting** with Vite
- **Optimized 3D rendering** (adjustable DPR)
- **Smooth scroll performance** with Lenis
- **CSS-in-JS efficiency** with Tailwind
- **Responsive media queries** for optimal loading

---

## 🐛 Troubleshooting

### Avatar not rendering
- Check if Three.js and React Three Fiber are installed
- Verify GPU acceleration is enabled in your browser
- Try disabling extensions that might block WebGL

### Contact form not working
- Ensure Firebase is properly configured in `.env`
- Check Firestore rules allow write access
- Verify email validation in form submission

### Animations stuttering
- Disable browser extensions
- Check for CPU-intensive background processes
- Reduce animation complexity in `src/styles/index.css`

### Mobile layout issues
- Clear browser cache
- Check viewport meta tag in `index.html`
- Test with actual mobile device (not just DevTools)

---

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🌟 Built By

**Vyom Gupta** - Developer & Designer

### Libraries & Resources
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com)
- [Framer Motion](https://www.framer.com/motion)
- [Three.js](https://threejs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Firebase](https://firebase.google.com)
