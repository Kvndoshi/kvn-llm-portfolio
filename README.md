# KVN LLM Portfolio

A futuristic, AI-powered portfolio website featuring a distinctive cyberpunk aesthetic with Google-inspired branding.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Futuristic Design**: Dark cyberpunk theme with animated grid backgrounds and glassmorphism
- **Google-Inspired Branding**: KVN LLM title with iconic Google color palette
- **Responsive**: Fully responsive design for all device sizes
- **Performance**: Optimized for speed and SEO
- **Extensible**: Ready for future LLM and knowledge graph integration

## 🎨 Design Philosophy

Following distinctive design principles to avoid generic AI aesthetics:
- IBM Plex Mono for a technical, unique feel
- Google color palette (Blue, Red, Yellow, Green) for brand recognition
- Animated grid patterns and gradient overlays
- Glassmorphic UI elements with subtle animations
- CSS-only animations for optimal performance

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: IBM Plex Mono (Google Fonts)
- **Deployment**: Vercel

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

The portfolio is designed to be easily customizable:

### Update About Section
Edit the props in `app/page.tsx`:
```typescript
<AboutSection 
  title="Your Title"
  description="Your description"
  highlights={["Item 1", "Item 2", "Item 3", "Item 4"]}
/>
```

### Change Colors
Modify CSS variables in `app/globals.css`:
```css
:root {
  --google-blue: #4285F4;
  --google-red: #EA4335;
  /* ... */
}
```

### Add Sections
Create new components in `app/components/` and import them in `app/page.tsx`

## 🎯 Future Enhancements

- [ ] LLM integration for interactive Q&A
- [ ] Knowledge graph database for unstructured data
- [ ] Projects showcase section
- [ ] Contact form with backend
- [ ] Blog/Articles section
- [ ] Dark/Light theme toggle

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

---

Built with ❤️ using Next.js and deployed on Vercel

