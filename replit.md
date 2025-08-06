# Vortex Hub - Institutional Website

## Overview

This is a modern, professional, and responsive institutional website for Vortex Hub, a company specializing in commercial consulting, digital marketing, AI automation, and CRM implementation. The project is built as a full-stack application with a React frontend and Express backend, designed to showcase services, team members, and facilitate lead generation through contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2025)

- **Complete website refactoring**: Redesigned with modern, professional template focused on Vortex Hub as a services hub
- **New branding**: Integrated official Vortex logo and updated brand messaging to "Hub de Serviços" 
- **Enhanced user experience**: Added new "About Us" section, improved hero design with animated elements
- **Modern visual design**: Implemented dark gradient backgrounds, glass morphism effects, and smooth animations
- **Updated contact information**: Added company address (Rua Engenheiro Emílio Odebrecht, nº 118, Bairro das Nações, 2º andar, Sala 6)
- **Improved layout**: Reorganized sections for better flow and user engagement
- **Maintained core functionality**: Preserved all existing services, team structure, and Kommo partner integration

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal schema)
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Design System
- **Color Scheme**: Purple primary (#A855F7), gray secondary, white background
- **Typography**: Inter font family
- **Component Library**: Comprehensive shadcn/ui components with Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Header**: Sticky navigation with smooth scrolling to sections
2. **Hero**: Clean landing section with statistics and call-to-action buttons
3. **Services**: Grid layout showcasing 5 main service categories with icons and glass effects
4. **Benefits**: Key differentiators and value propositions section
5. **Team**: Team member profiles with images and roles, enhanced with glass effects
6. **Contact**: Contact form with email fallback and comprehensive contact information
7. **Footer**: Company info, navigation links, and Kommo partner badge

### Service Categories
1. **💼 Commercial Consulting & Strategy**: Growth diagnostics, sales funnels, customer journeys
2. **🚀 Digital Marketing & Sales**: Paid traffic management, automated sales funnels, product launches
3. **🎨 Social Media & Content**: Strategic content planning, creative assets, copywriting
4. **🤖 AI Implementation & Automation**: Automated workflows, CRM integrations, intelligent customer service
5. **📊 CRM & Commercial Intelligence**: Kommo CRM implementation, performance dashboards, lead management

### Team Structure
- Tayane (Founder & Commercial Strategy Director)
- David (Founder & Technology Director)
- Arthur (Programmer)
- Rafael (Prompt Engineer)
- Amanda (Storymaker & Social Media)
- Djeniffer (Finance)

## Data Flow

### Frontend Data Flow
1. Static content rendered from React components
2. Smooth scrolling navigation between sections
3. External form integration with Kommo CRM for lead capture
4. TanStack Query handles any API calls (minimal backend integration currently)

### Backend Data Flow
1. Express server serves as API backend (routes not yet implemented)
2. Static file serving for production builds
3. Session management through PostgreSQL
4. Database operations through Drizzle ORM with type safety

## External Dependencies

### Major Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@radix-ui/***: UI primitive components
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Third-party Integrations
- **Kommo CRM**: Lead capture forms and customer relationship management
- **Neon Database**: Cloud PostgreSQL hosting
- **Google Fonts**: Inter typography

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations in `./migrations` directory

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment setting (development/production)

### Development Workflow
- `npm run dev`: Start development server with hot reload
- `npm run build`: Build production assets
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

### Production Considerations
- Static asset serving through Express
- PostgreSQL session storage for scalability
- Replit-specific configurations for development environment
- Mobile-responsive design for cross-device compatibility

The application follows a clean separation of concerns with the frontend focused on user experience and lead generation, while the backend provides a foundation for future API development and data management.