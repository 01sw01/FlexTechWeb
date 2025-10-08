# FlexTech E-Commerce Platform

## Overview

FlexTech is a full-stack e-commerce platform specializing in mobile accessories and electronics. Built as a modern React SPA with Express backend, it provides a complete shopping experience with customer-facing product browsing, filtering, and cart functionality, alongside an admin dashboard for managing products and orders. The application currently operates with mock data as a prototype, designed to be enhanced with real database integration and payment processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (October 2025)

**Product Detail & Checkout Features**
- Created comprehensive product detail pages with image galleries, specifications, features, and related products
- Implemented full checkout flow with shipping and payment forms
- Added promo code support: SAVE10 (10% off), SAVE20 (20% off), FLAT50 (AED 50 off)
- Cart clears automatically after successful order placement

**Design & Typography Updates**
- Changed Store title and product names from decorative serif to modern sans-serif (Open Sans) for better consistency
- Improved visual hierarchy and readability across the application

**Content Improvements**
- Completely redesigned About page with company values, mission statement, statistics, and call-to-action sections
- Enhanced Contact page with better information layout

**Navigation & UX**
- Product cards now navigate to detail pages when clicked
- Proper checkout flow: Product → Add to Cart → Cart Sheet → Checkout → Confirmation
- All navigation uses wouter Link components for smooth client-side routing

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with functional components and hooks for UI development
- Vite as the build tool and development server
- TypeScript for type safety across the application
- Wouter for lightweight client-side routing

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local component state using React hooks (useState, useEffect)
- Mock data stored in `client/src/lib/mockData.ts` for prototype functionality

**UI Component System**
- Shadcn/ui component library (New York style) with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- FlexTech brand color palette: primary orange/coral (`20 95% 60%`), deep charcoal, soft white backgrounds
- Custom CSS variables for theming with light/dark mode support
- Responsive design with mobile-first approach

**Key Application Features**
- Product catalog with grid layout and filtering (brand, price, category, ratings)
- Shopping cart functionality with quantity management
- Wishlist/favorites system
- Product search and sorting capabilities
- Hero slider for promotional content
- Product detail pages with image galleries, specifications, and related products
- Checkout flow with promo code support (SAVE10, SAVE20, FLAT50)
- Comprehensive About and Contact pages
- Admin authentication and dashboard

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Custom Vite middleware integration for development HMR
- Session-based architecture (prepared for authentication)

**Data Layer (Prepared)**
- Drizzle ORM configured for PostgreSQL (via Neon serverless)
- Schema definition in `shared/schema.ts` (currently minimal user schema)
- In-memory storage interface (`MemStorage`) for prototype phase
- Migration support via `drizzle-kit`

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Storage interface pattern (`IStorage`) for database abstraction
- Request/response logging middleware
- Error handling middleware for consistent error responses

### Design System

**Typography**
- Primary font: Inter/Open Sans for modern, clean appearance
- Store titles and product names use sans-serif (font-sans) for consistency
- Heading weights: Semi-bold (600) to Bold (700)
- Body text: Regular (400) to Medium (500)
- Responsive text scaling (text-5xl/6xl for heroes, text-lg for products)

**Layout Patterns**
- Container-based layouts with consistent padding
- Grid systems for product displays (1/2/3/4 columns responsive)
- Card-based UI components with elevation states
- Sticky header navigation
- Collapsible filter sidebar for mobile

**Color System**
- Primary actions: Orange/coral for CTAs and highlights
- Semantic colors: Success green, warning amber, error red, info blue
- Neutral grays for backgrounds and text hierarchy
- Dark mode support with adjusted color palette

### External Dependencies

**UI & Styling**
- Radix UI (comprehensive primitive components for accessible UI)
- Tailwind CSS with PostCSS for utility-first styling
- Lucide React for icon system
- Class Variance Authority (CVA) for component variants
- CLSX and tailwind-merge for className management

**Data & Forms**
- TanStack Query for async state management
- React Hook Form with Zod resolvers for form validation
- Drizzle Zod for schema-to-validation integration
- Date-fns for date formatting

**Charts & Visualization**
- Recharts for admin dashboard analytics

**Development Tools**
- Vite with React plugin
- Replit-specific plugins (runtime error overlay, cartographer, dev banner)
- TypeScript with strict mode enabled
- ESBuild for production server bundling

**Database (Configured)**
- Neon Serverless PostgreSQL (via `@neondatabase/serverless`)
- Drizzle ORM for type-safe database operations
- Connect-pg-simple for session storage (when sessions are implemented)

**Routing & Navigation**
- Wouter for lightweight client-side routing
- Path aliases configured: `@/` (client src), `@shared/` (shared schemas), `@assets/` (static assets)