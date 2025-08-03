# Multi-Theme React Application

![Multi-Theme Switcher](./public/theme.png)

## 🎨 Overview
A sophisticated multi-theme React application that demonstrates advanced theming capabilities with complete UI transformation. This project showcases not just color changes, but comprehensive layout, typography, and component restructuring across three distinct themes. Built with modern React 19, TypeScript, Redux Toolkit, and enhanced with smooth Framer Motion animations.

**🔗 Live Demo**: [https://multi-theme-switcher.vercel.app](https://multi-theme-switcher.vercel.app) *(if deployed)*

## 🌟 Key Highlights

- **🎨 Revolutionary Theme System**: Three completely different UX paradigms
- **⚡ Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS 4
- **🔒 Enterprise Security**: Firebase Authentication + CSP headers
- **📱 Mobile-First Design**: Fully responsive across all devices
- **🛒 E-commerce Ready**: Complete shopping cart and product management
- **🚀 Production Optimized**: Code splitting, lazy loading, and performance tuning

## ✨ Features

### 🎯 Core Theme Features
- **Multi-Theme Support**: Three radically different themes:
  - **Minimal Theme**: Clean, light design with Inter fonts and grid layout
  - **Dark Theme**: Elegant sidebar layout with Playfair Display serif fonts
  - **Colorful Theme**: Vibrant gradient backgrounds with Pacifico cursive fonts
- **Persistent Theme Selection**: Automatic save/restore using localStorage
- **Redux State Management**: Centralized theme management with Redux Toolkit
- **Smooth Animations**: Beautiful theme transitions with Framer Motion
- **Dynamic Layout Changes**: Complete UI restructuring per theme
- **Typography Transformation**: Font family changes with theme switching

### 🛡️ Security & Performance
- **Firebase Authentication**: Secure user authentication with protected routes
- **Security Headers**: CSP, XSS protection, and CSRF prevention
- **Code Splitting**: Optimized bundle with manual chunks (vendor, router, UI)
- **TypeScript**: Full type safety throughout the application
- **API Integration**: Secure integration with fakestoreapi.com
- **Error Handling**: Comprehensive error boundaries and API error handling
- **Performance Optimization**: Lazy loading, image optimization, and caching

### 🛍️ E-commerce Features
- **Product Catalog**: Paginated product listings with dynamic theming
- **Shopping Cart**: Add/remove products with persistent Redux state
- **Product Details**: Detailed product pages with responsive image galleries
- **User Authentication**: Complete sign in/up flow with Firebase
- **Contact Forms**: Interactive contact forms with validation
- **Payment Integration**: Payment page structure (ready for Stripe/PayPal)
- **Responsive Design**: Mobile-optimized shopping experience

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation header with theme switcher
│   ├── Layout/          # Main layout wrapper
│   ├── Sidebar/         # Dark theme sidebar
│   ├── Pagination/      # Product pagination
│   └── common/          # Common components (Loader, etc.)
├── pages/               # Application pages
│   ├── HomePage.tsx     # Main product listing page
│   ├── AboutPage.tsx    # About company page
│   ├── ContactPage.tsx  # Contact form page
│   ├── ProductPage.tsx  # Product detail page
│   ├── CartPage.tsx     # Shopping cart page
│   ├── SignInPage.tsx   # Authentication pages
│   └── SignUpPage.tsx
├── store/               # Redux store configuration
│   ├── slices/          # Redux slices
│   │   ├── themeSlice.ts    # Theme management
│   │   ├── authSlice.ts     # Authentication state
│   │   ├── cartSlice.ts     # Shopping cart state
│   │   └── productsSlice.ts # Product data
│   └── index.ts         # Store configuration
├── theme/               # Theme definitions
│   └── themes.ts        # Theme styles and configurations
├── services/            # API services
│   └── api.ts          # API client and endpoints
├── hooks/               # Custom React hooks
│   └── usePaginatedFetch.ts # Pagination logic
├── firebase/            # Firebase configuration
│   ├── config.ts       # Firebase setup
│   └── auth.ts         # Authentication helpers
└── models/              # TypeScript type definitions
    └── Product.ts      # Product interface
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager
- Firebase project for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SridharSahu-1/Multi-Theme-Switcher-App.git
   cd Multi-Theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🎨 Theme System

### Theme Structure
Each theme defines comprehensive styling for:
- Layout containers and spacing
- Typography (font families, sizes, weights)
- Color schemes (backgrounds, text, accents)
- Component-specific styles (cards, buttons, forms)
- Responsive breakpoints

### Theme Switching
The theme switcher in the header allows instant switching between:

1. **Minimal Theme** (`minimal`)
   - Light, clean aesthetic
   - Inter font family
   - Grid-based product layout
   - Subtle shadows and borders

2. **Dark Theme** (`dark`)
   - Dark background with sidebar navigation
   - Playfair Display serif fonts
   - Vertical product listing
   - Teal accent colors

3. **Colorful Theme** (`colorful`)
   - Vibrant gradient backgrounds
   - Pacifico cursive fonts
   - Card-based grid layout
   - Playful colors and animations

## 🛠️ Technology Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router 6** - Client-side routing
- **Redux Toolkit** - State management
- **Lucide React** - Icon library

### Backend & Services
- **Firebase Authentication** - User authentication
- **Fake Store API** - Product data source
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Dev Server** - Development server with HMR

## 🔒 Security Features
### Security Headers
- Content Security Policy (CSP)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Authentication Security
- Firebase Authentication with secure token handling
- Protected routes requiring authentication
- Secure environment variable usage
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Key responsive features:
- Flexible grid layouts that adapt to screen size
- Mobile-optimized navigation and forms
- Touch-friendly interface elements
- Optimized images and content loading

## 🎯 API Integration

### Fake Store API
- **Base URL**: `https://fakestoreapi.com`
- **Endpoints Used**:
  - `GET /products` - Fetch all products
  - `GET /products/{id}` - Fetch single product
- **Features**:
  - Error handling with retry logic
  - Loading states and pagination
  - Data caching and optimization

## 🧪 Testing & Quality Assurance

### Code Quality
- TypeScript strict mode enabled
- ESLint with React and TypeScript rules
- Consistent code formatting
- Component prop validation

### Performance Optimization
- Code splitting with manual chunks
- Lazy loading of routes and components
- Image optimization
- Bundle size optimization

## 🚀 Deployment

### Supported Platforms
- **Vercel** (Recommended)
- **Netlify**
- **Firebase Hosting**
- **Static hosting services**

### Environment Variables
Ensure all required environment variables are set in your deployment platform:
- Firebase configuration variables
- API endpoints and keys

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Hipster Inc.** - Project requirements and specifications
- **Fake Store API** - Product data source
- **Firebase** - Authentication services
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library

## 📞 Support

For support and questions:
- Email: hr@hipster-inc.com
- Phone: +65 8231 4107
- Address: 75 Ayer Rajah Crescent, #01-04, Singapore 139953

---

**Built with ❤️ for Hipster Inc. Assignment**
