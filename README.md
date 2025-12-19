# Personal Portfolio

A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support** - Theme switching capability with context-based state management
- **Analytics Dashboard** - Track portfolio views and user interactions
- **Blog Section** - Showcase your articles and technical posts
- **Projects Showcase** - Display and highlight your best work
- **Skills Display** - Organized presentation of technical expertise
- **Contact Integration** - Easy-to-use contact section with call-to-action
- **Firebase Integration** - Backend services for data management

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Backend**: Firebase
- **Package Manager**: Bun

## 📦 Getting Started

### Prerequisites

- Node.js 16+ or Bun runtime
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YuvaSriSai18/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build
# or
bun run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── BlogsSection.tsx
│   ├── AnalyticsSection.tsx
│   └── ui/             # shadcn-ui components
├── contexts/           # React context providers
│   ├── ThemeContext.tsx
│   └── AvatarModalContext.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and Firebase config
├── constants/          # JSON data for content
└── pages/              # Page components
```

## 🎨 Customization

### Update Content

All content is managed through JSON files in `src/constants/`:
- `projects.json` - Your portfolio projects
- `skills.json` - Technical skills and expertise
- `blogs.json` - Blog posts
- `interests.json` - Personal interests
- `analytics.json` - Analytics data

### Styling

The project uses Tailwind CSS for styling. Configuration can be modified in `tailwind.config.ts`.

## 🔧 Configuration

### Firebase Setup

Configure your Firebase credentials in `src/lib/firebase.ts` with your project details.

### Environment Variables

Create a `.env` file in the root directory if needed for environment-specific configurations.

## 🚀 Deployment

Deploy to Firebase Hosting or any static hosting service:

```bash
# Build for production
npm run build

# Deploy with Firebase
firebase deploy
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

[Your Name/Profile](https://github.com/YuvaSriSai18)

---

**Happy coding! 🎉**
