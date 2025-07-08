# TuniBless - Connecting Tunisian Community in Germany 🇹🇳🇩🇪

A modern, multilingual platform designed to support Tunisian applicants and residents in Germany with essential services, resources, and community connections.

## 🌟 Project Overview

TuniBless is a comprehensive web platform that bridges the gap between Tunisian nationals and German administrative, legal, and social services. Our mission is to simplify the integration process and provide accessible support for Tunisians living in or planning to move to Germany.

### Key Features

- 🌍 **Multilingual Support** - German, Arabic, French, and English
- 🌙 **Dark/Light Mode** - Adaptive themes for better user experience
- 📱 **Mobile-First Design** - Responsive across all devices
- ♿ **Accessibility Focused** - WCAG 2.1 compliant
- 🎨 **Modern UI/UX** - Beautiful animations and intuitive navigation
- 🔍 **SEO Optimized** - Enhanced search engine visibility
- 🌐 **RTL/LTR Support** - Proper text direction for Arabic content

## 🛠 Technology Stack

This project is built with modern web technologies:

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Theming**: next-themes
- **Package Manager**: Bun/npm

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or Bun package manager
- Git

## 🚀 Getting Started

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd tunibless-web-connect

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build
# or
bun run build

# Preview the build
npm run preview
# or
bun run preview
```

## 📁 Project Structure

```
tunibless-web-connect/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── _redirects
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # Services showcase
│   │   ├── Mission.tsx       # Mission statement
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Team.tsx          # Team members
│   │   ├── LanguageSwitcher.tsx # Language selection
│   │   ├── ThemeSwitcher.tsx    # Dark/light mode toggle
│   │   └── StickyCTA.tsx        # Floating action buttons
│   ├── pages/                # Route components
│   │   ├── Index.tsx         # Homepage
│   │   ├── About.tsx         # About page
│   │   ├── Registration.tsx  # Registration process
│   │   ├── AllServices.tsx   # Services overview
│   │   ├── ServiceCategory.tsx # Service categories
│   │   ├── ContactPage.tsx   # Contact form page
│   │   ├── Germany.tsx       # Germany information
│   │   ├── Tunisia.tsx       # Tunisia information
│   │   ├── Global.tsx        # Global services
│   │   ├── RegionPage.tsx    # Regional information
│   │   ├── Events.tsx        # Community events
│   │   ├── FAQ.tsx           # Frequently asked questions
│   │   ├── Onboarding.tsx    # User onboarding
│   │   ├── Downloads.tsx     # Document downloads
│   │   ├── Glossar.tsx       # Terms glossary
│   │   ├── Roadmap.tsx       # Platform roadmap
│   │   ├── Spenden.tsx       # Donations page
│   │   ├── Mitglied.tsx      # Membership page
│   │   ├── Helfer.tsx        # Volunteer page
│   │   ├── Success.tsx       # Success confirmation
│   │   ├── Danke.tsx         # Thank you page
│   │   ├── Impressum.tsx     # Legal notice
│   │   ├── Datenschutz.tsx   # Privacy policy
│   │   ├── Cookies.tsx       # Cookie policy
│   │   └── NotFound.tsx      # 404 error page
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── assets/               # Images and media
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Application entry point
├── package.json              # Project dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🌐 Available Routes

The platform includes comprehensive routing for all essential pages:

### Main Pages
- `/` - Homepage with hero, services, and mission
- `/about` - About TuniBless and team
- `/registration` - User registration process
- `/services` - All available services
- `/services/:category` - Specific service categories
- `/contact` - Contact form and information

### Regional Pages
- `/germany` - Germany-specific information
- `/tunisia` - Tunisia-specific information
- `/global` - Global services
- `/region/:gov` - Regional government information

### Community Features
- `/events` - Community events and meetups
- `/faq` - Frequently asked questions
- `/onboarding` - New user guidance
- `/downloads` - Document downloads
- `/glossar` - Terms and definitions
- `/roadmap` - Platform development roadmap

### Engagement Pages
- `/donate` - Donation and support
- `/mitglied` - Membership program
- `/helfer` - Volunteer opportunities

### Utility Pages
- `/success` - Success confirmation
- `/danke` - Thank you page
- `/impressum` - Legal notice (German requirement)
- `/datenschutz` - Privacy policy
- `/cookies` - Cookie policy

## 🎨 Design System

### Theme Support
- Light and dark modes with smooth transitions
- Consistent color palette across themes
- Proper contrast ratios for accessibility

### Typography
- Responsive font scaling
- Optimized for multilingual content
- Clear hierarchy and readability

### Components
- Reusable UI components from shadcn/ui
- Custom styled components for TuniBless branding
- Accessible form elements and interactive components

## 🌍 Internationalization

The platform supports multiple languages:
- **German (DE)** - Primary language
- **Arabic (AR)** - With RTL text direction
- **French (FR)** - Secondary language
- **English (EN)** - International support

Language switching is available through the navigation bar, with proper RTL/LTR text direction handling.

## ♿ Accessibility Features

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Focus indicators and skip links
- Semantic HTML structure

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Touch-friendly interface elements
- Optimized performance on mobile devices
- Progressive Web App (PWA) ready

## 🔧 Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint and Prettier for code formatting
- Consistent component structure
- Clear naming conventions

### Component Structure
```tsx
// Component naming: PascalCase
// Props interface: ComponentNameProps
// Export: named export preferred

interface ComponentNameProps {
  // Define props with proper types
}

export const ComponentName: React.FC<ComponentNameProps> = ({ props }) => {
  // Component logic
  
  return (
    // JSX with proper accessibility attributes
  );
};
```

### Best Practices
- Use semantic HTML elements
- Implement proper error boundaries
- Optimize images and assets
- Follow React hooks best practices
- Write accessible code by default

## 🚀 Deployment

### Lovable Platform
The project is configured for deployment on Lovable:

1. Visit the [Lovable Project](https://lovable.dev/projects/de06be76-a49a-41d5-b5c1-380aff2779b9)
2. Click Share → Publish
3. Configure custom domain if needed

### Alternative Deployment Options
- **Vercel**: `npm run build` and deploy dist folder
- **Netlify**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

We welcome contributions to improve TuniBless! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add proper TypeScript types
- Include accessibility considerations
- Test across different screen sizes
- Update documentation as needed

## 📞 Support & Contact

- **Website**: [TuniBless Platform](https://tunibless.de)
- **Email**: info@tunibless.de
- **WhatsApp**: +49 123 456 7890
- **Community**: Join our Telegram group

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Tunisian community in Germany for inspiration and feedback
- Open source contributors and maintainers
- shadcn/ui for the excellent component library
- The React and TypeScript communities

---

**Made with ❤️ for the Tunisian community in Germany**
