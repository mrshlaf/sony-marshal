# Sony | The Lumina Project
### 2026 Reference Implementation Landing Page

The Lumina Project is a high-end, premium-density landing page designed as a professional reference for Sony's ecosystem. It focuses on an "Editorial Minimalist" aesthetic, moving away from generic templates to a custom-crafted, tactile digital experience.

---

## 🎨 Design Philosophy

- **High-Density Layout**: Maximized information density without clutter, ensuring every pixel serves a structural or aesthetic purpose.
- **Editorial Rhythm**: An asymmetric visual flow that mimics high-end physical magazines (Reference: Sony SST branding).
- **Tactile Transitions**: Powered by GSAP for non-linear, organic animations that feel "human-crafted" rather than AI-generated.
- **Premium Color Science**: Utilizing a matte-black and off-white (Zinc) palette to reduce visual fatigue while maintaining deep focus.

## 🛠 Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org/) (App Router)
- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Typography**: 
  - **Outfit**: Geometric sans-serif for high-impact headlines and branding.
  - **Inter**: Precision-engineered font for maximum digital legibility.
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

1. **Cinematic Hero**: 4K Video background with GSAP-powered parallax headlines.
2. **Technical Bento Grid**: A compact, interactive showcase of core technical specifications.
3. **Product Showcase**: An asymmetric grid featuring interactive detail modals for key Sony products.
4. **Seamless Ecosystem**: A high-density grid highlighting integrated mobile and studio workflows.
5. **Mobile-Safe UI**: Engineered for 100% responsiveness with safe-zone padding and optimized touch targets.
6. **Smooth Motion**: Custom Lenis-style smooth scroll integration for a fluid browsing experience.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Project Structure

- `app/`: Next.js App Router and global configuration.
- `components/sections/`: Core landing page modules (Hero, Bento, Vision, etc.).
- `components/ui/`: Reusable, atomic UI components and animation wrappers.
- `public/`: High-resolution assets (Images, Videos).
- `lib/`: Utility functions and shared animation logic.

---

*This project was developed as part of the 2026 Sony Reference Implementation.*
