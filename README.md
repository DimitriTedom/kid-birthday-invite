# 🎄 SnowDev Next.js Fullstack Template

<div align="center">

A modern, opinionated, and production-ready **Next.js 15** starter template powered by **React 19**, **TypeScript**, **Tailwind CSS**, **Prisma ORM**, and more — built with ❤️ by [SnowDev](https://github.com/DimitriTedom).

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748?logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

**A modern, production-ready Next.js fullstack template with all the tools you need to build amazing full-stack applications with server-side rendering, API routes, and database integration.**

### 🎨 Template Preview

<div align="center">

![SnowDev Next.js Template Hero](https://raw.githubusercontent.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE/main/public/preview.png)

*✨ Beautiful, modern interface showcasing the template's capabilities*

**🏆 Production Ready** | **🎯 Modern Technologies** | **🚀 Developer Experience**

</div>

**What you see above:**
- 🎨 **Modern UI Design** with clean, professional layout
- 🌓 **Dark/Light mode** support out of the box  
- 📱 **Responsive design** that works on all devices
- ⚡ **Next.js 15** with React 19 for cutting-edge performance
- 🔷 **TypeScript** for type-safe development
- 🗄️ **Prisma ORM** for powerful database management
- 🎨 **TailwindCSS** for utility-first styling
- 🐳 **Docker** ready for easy deployment

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-documentation) • [🛠️ Features](#️-features) • [🐳 Docker](#-docker-support)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🗄️ Database Setup](#️-database-setup)
- [🐳 Docker Support](#-docker-support)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Styling & Components](#-styling--components)
- [🔒 Environment Variables](#-environment-variables)
- [🚀 API Routes](#-api-routes)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

This template is a comprehensive fullstack starter kit for building modern Next.js applications. Created by **@DimitriTedom (SnowDev)** for the developer community, it integrates the best practices and most popular tools in the Next.js ecosystem for full-stack development.

Perfect for:
- 🏢 Enterprise fullstack applications
- 📱 SaaS platforms with backend logic
- 🛍️ E-commerce applications with database
- 📊 Data-driven dashboards and admin panels
- 🌐 API-first applications
- 🎯 MVPs and prototypes with rapid development

## ✨ Features

### 🏗️ Core Features
- ⚡ **Next.js 15**: Latest Next.js with App Router and React 19
- 🎯 **Type Safe**: Full TypeScript support with strict configuration
- 🗄️ **Prisma ORM**: Type-safe database access with any SQL/NoSQL database
- 🎨 **Modern UI**: Pre-built components with ShadCN/UI
- 📱 **Responsive**: Mobile-first design with TailwindCSS
- 🔄 **State Management**: Zustand for simple and powerful state management
- 🎭 **Icon Library**: Comprehensive icon set with React Icons

### 🛠️ Developer Experience
- 🔧 **Pre-configured**: ESLint, Prettier, and TypeScript ready
- 🐳 **Docker Ready**: Multi-stage Dockerfile with optimization
- 📝 **Environment Templates**: Comprehensive .env.template
- 🎨 **Custom Tailwind Layers**: Organized CSS with base, components, and utilities
- 🔒 **Security**: Best practices for secure applications
- 📊 **Database Migrations**: Prisma migrations for version-controlled schema changes

### 🚀 Production Ready
- 📦 **Optimized Builds**: Tree-shaking and code splitting
- 🔍 **SEO Friendly**: Server-side rendering and meta tags
- ♿ **Accessible**: WCAG compliant components
- 🌐 **API Routes**: Built-in API routes with Next.js
- 🗄️ **Database Ready**: Just configure your provider and start coding

### 🎨 Backend Features
- 🗄️ **Prisma ORM**: Multi-database support (PostgreSQL, MySQL, SQLite, MongoDB, etc.)
- 🔐 **Type-safe Database**: Full TypeScript integration
- 📊 **Example Models**: User, Profile, and Post models included
- 🔄 **Migrations**: Database migration system
- 🎯 **API Examples**: RESTful API routes with Prisma
- 📚 **Swagger UI**: Interactive API documentation with OpenAPI 3.0
- 📊 **Morgan Logging**: HTTP request logging with colored output

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 15.3.3 | React Framework with SSR |
| **UI Library** | React | 19.0.0 | UI Library |
| **Language** | TypeScript | 5+ | Type Safety |
| **Database ORM** | Prisma | Latest | Type-safe Database Access |
| **Styling** | TailwindCSS | 3.4.17 | Utility-first CSS |
| **UI Components** | ShadCN/UI | Latest | Pre-built Components |
| **State Management** | Zustand | Latest | Global State |
| **Icons** | React Icons | Latest | Icon Library |
| **Form Handling** | React Hook Form | Latest | Form Management |
| **Validation** | Zod | Latest | Schema Validation |
| **Theme** | next-themes | Latest | Dark Mode Support |
| **Linting** | ESLint | 9+ | Code Quality |
| **Container** | Docker | - | Containerization |

## 🧰 Requirements

Make sure you have the following installed:

| Tool    | Version     |
| ------- | ----------- |
| Node.js | `>=20.12.0` |
| Bun     | `>=1.2.10`  |

> ⚠️ **Note**: This project recommends using **Bun** as the package manager.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm, yarn, pnpm, or bun
- Git
- PostgreSQL, MySQL, SQLite, or MongoDB (choose one)

### Method 1: Using the Development Helper Script (Recommended ⭐)

The easiest way to get started:

```bash
# 1. Clone the repository
git clone https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE.git my-awesome-app
cd my-awesome-app

# 2. Make the helper script executable
chmod +x dev-helper.sh

# 3. Run quickstart (does everything for you!)
./dev-helper.sh quickstart
```

That's it! The script will:
- ✅ Install all dependencies
- ✅ Set up environment files
- ✅ Generate Prisma Client
- ✅ Run database migrations
- ✅ Optionally seed the database
- ✅ Start the development server

### Method 2: Manual Setup

If you prefer manual control:

```bash
# 1. Clone the repository
git clone https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE.git my-awesome-app
cd my-awesome-app

# 2. Install dependencies
bun install

# 3. Environment setup
cp .env.template .env
nano .env  # Edit your environment variables

# 4. Database setup
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed  # Optional

# 5. Start development server
bun run dev
```

### 5. Start Building! 🎉
You're ready to start building your amazing fullstack application!

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
SNOWDEV-NEXTJS-TEMPLATE/
├── 📁 app/                    # Next.js App Router
│   ├── api/                   # API Routes
│   │   ├── docs/             # Swagger JSON endpoint
│   │   ├── users/            # User CRUD operations
│   │   ├── posts/            # Post CRUD operations
│   │   └── health/           # Health check endpoint
│   ├── api-docs/             # Swagger UI page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── 📁 components/            # React components
│   └── 📁 ui/               # ShadCN UI components
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
├── 📁 hooks/                 # Custom React hooks
│   └── use-mobile.tsx
├── 📁 lib/                   # Utility functions
│   ├── utils.ts             # Helper utilities
│   ├── prisma.ts            # Prisma client
│   ├── api-response.ts      # API response helpers
│   ├── validations.ts       # Zod schemas
│   ├── swagger.ts           # Swagger configuration
│   └── morgan.ts            # Morgan logging setup
├── 📁 prisma/                # Prisma ORM
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Database seeding
├── 📁 public/                # Static assets
│   └── fonts/               # Custom fonts
├── 📁 stores/                # Zustand stores
│   └── app-store.ts         # Global app state
├── 📁 styles/                # Global styles
│   └── globals.css          # Tailwind & custom CSS
├── 📄 .dockerignore         # Docker ignore file
├── 📄 .env.template         # Environment template
├── 📄 components.json       # ShadCN configuration
├── 📄 dev-helper.sh         # Development helper script
├── 📄 Dockerfile            # Docker configuration
├── 📄 docker-compose.yml    # Docker Compose setup
├── 📄 eslint.config.mjs     # ESLint configuration
├── 📄 next.config.ts        # Next.js configuration
├── 📄 package.json          # Dependencies & scripts
├── 📄 postcss.config.js     # PostCSS configuration
├── 📄 README.md             # Documentation
├── 📄 tailwind.config.js    # TailwindCSS configuration
└── 📄 tsconfig.json         # TypeScript configuration
```

## 🔧 Configuration

### Prisma Configuration
The `prisma/schema.prisma` file contains your database schema. By default, it's configured for PostgreSQL, but you can change it to any supported database:

```prisma
datasource db {
  provider = "postgresql" // Change to: mysql, sqlite, sqlserver, mongodb, cockroachdb
  url      = env("DATABASE_URL")
}
```

### Example Models Included
- **User**: User authentication and profile
- **Profile**: Extended user information
- **Post**: Blog posts or content

### ShadCN/UI Configuration
```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "styles/globals.css"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 🗄️ Database Setup

### Supported Databases
- ✅ PostgreSQL (default)
- ✅ MySQL
- ✅ SQLite
- ✅ SQL Server
- ✅ MongoDB
- ✅ CockroachDB

### Setup Steps

#### 1. Choose Your Database Provider
Edit `prisma/schema.prisma` and change the provider:

```prisma
datasource db {
  provider = "postgresql" // or mysql, sqlite, etc.
  url      = env("DATABASE_URL")
}
```

#### 2. Configure DATABASE_URL
Update your `.env` file:

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# MySQL
DATABASE_URL="mysql://user:password@localhost:3306/mydb"

# SQLite (no server needed!)
DATABASE_URL="file:./dev.db"
```

#### 3. Run Migrations
```bash
# Create and apply migration
npx prisma migrate dev --name init

# Generate Prisma Client
npx prisma generate
```

#### 4. (Optional) Open Prisma Studio
```bash
npx prisma studio
```
This opens a visual database browser at `http://localhost:5555`

### Prisma Commands Cheat Sheet

```bash
# Generate Prisma Client (after schema changes)
npx prisma generate

# Create a new migration
npx prisma migrate dev --name <migration-name>

# Apply pending migrations
npx prisma migrate deploy

# Reset database (development only!)
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio

# Format schema file
npx prisma format

# Validate schema
npx prisma validate
```

## 🐳 Docker Support

### Development Container
```bash
# Build development image
docker build --target deps -t nextjs-template:dev .

# Run development container
docker run -p 3000:3000 -v $(pwd):/app nextjs-template:dev
```

### Production Container
```bash
# Build production image
docker build -t nextjs-template:prod .

# Run production container
docker run -p 3000:3000 --env-file .env nextjs-template:prod
```

### Docker Compose (with Database)
The template includes a `docker-compose.yml` for full-stack development:

```bash
# Setup environment
cp .env.docker.template .env.docker
nano .env.docker

# Run services
docker-compose up -d

# View logs
docker-compose logs -f
```

## 📜 Available Scripts

### 🛠️ Development Helper Script

This template includes a powerful **dev-helper.sh** script for managing common development tasks:

```bash
# Make it executable (first time only)
chmod +x dev-helper.sh

# Show all available commands
./dev-helper.sh help

# Quick start (setup + database + dev server)
./dev-helper.sh quickstart

# Common commands
./dev-helper.sh setup           # Initial project setup
./dev-helper.sh dev             # Start development server
./dev-helper.sh db:migrate      # Run database migration
./dev-helper.sh db:studio       # Open Prisma Studio
./dev-helper.sh check           # Full project check
./dev-helper.sh add:component   # Install ShadCN component
```

The dev-helper script provides:
- ✅ **Setup automation** - One command project initialization
- ✅ **Database management** - Easy Prisma commands
- ✅ **Docker integration** - Build and deploy with ease
- ✅ **Quality checks** - Lint, type-check, and validate
- ✅ **Component installer** - Add ShadCN components interactively

### Quick Reference Commands

```bash
# Development Helper Script (Recommended)
chmod +x dev-helper.sh
./dev-helper.sh quickstart         # Complete setup in one command
./dev-helper.sh dev                # Start development server
./dev-helper.sh db:migrate         # Run database migration
./dev-helper.sh db:studio          # Open Prisma Studio
./dev-helper.sh check              # Run all quality checks
```

### NPM Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database (Prisma)
npm run db:generate      # Generate Prisma Client
npm run db:migrate       # Create & apply migration
npm run db:push          # Push schema changes (no migration)
npm run db:studio        # Open Prisma Studio (GUI)
npm run db:seed          # Seed database with data
npm run db:reset         # Reset database (⚠️ destructive)

# Docker
npm run docker:build           # Build Docker image
npm run docker:run             # Run Docker container
npm run docker:compose:up      # Start all services
npm run docker:compose:down    # Stop all services
npm run docker:compose:logs    # View logs
```

## 🎨 Styling & Components

### Pre-built ShadCN Components
All components are server-compatible and fully typed:
- Button with variants
- Card components
- Form elements (Input, Textarea, Label)
- Dialog and Sheet modals
- Dropdown menus
- Avatar
- Badge
- Progress
- Pagination
- Popover
- Radio Group
- Separator
- Skeleton loaders
- Toast notifications (Sonner)
- Tooltip
- Resizable panels

### Adding New Components
```bash
# Add ShadCN components
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add table
```

### Custom Tailwind Utilities
The template includes organized CSS layers in `styles/globals.css`:

```css
@layer base {
  /* Base styles, CSS resets, theme variables */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Custom utility classes */
}
```

## 🔒 Environment Variables

### Client-side Variables (NEXT_PUBLIC_ prefix)
```env
NEXT_PUBLIC_APP_NAME="My Next.js App"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Server-side Variables
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="your-secret-key"
API_SECRET="your-api-secret"
```

### Security Best Practices
- ✅ Never expose secrets to client-side
- ✅ Use NEXT_PUBLIC_ prefix only for public variables
- ✅ Validate environment variables on startup
- ✅ Use different .env files for different environments
- ✅ Never commit .env file to git

## 🚀 API Routes

### 📚 API Documentation with Swagger

This template includes **Swagger UI** for interactive API documentation and **Morgan** for HTTP request logging.

**Access Swagger UI:**
```
http://localhost:3000/api-docs
```

**Access Swagger JSON:**
```
http://localhost:3000/api/docs
```

**Features:**
- 📖 Interactive API documentation
- 🧪 Test endpoints directly from the browser
- 📊 Request/response examples
- 🔍 Schema definitions

**Request Logging:**
- ⏱️ Response time tracking
- 🎨 Colored status codes
- 📋 Automatic filtering of static files

### Available API Endpoints

#### Users API
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user by ID
- `DELETE /api/users/{id}` - Delete user by ID

#### Posts API
- `GET /api/posts` - Get all posts (with optional filters)
- `POST /api/posts` - Create a new post

### Creating API Routes with Swagger & Logging

```typescript
// app/api/items/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { logRequest } from '@/lib/morgan';

/**
 * @swagger
 * /api/items:
 *   get:
 *     tags:
 *       - Items
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: Successful response
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  try {
    const items = await prisma.item.findMany();
    const response = NextResponse.json({ success: true, data: items });
    logRequest(request, 200, Date.now() - startTime);
    return response;
  } catch (error) {
    logRequest(request, 500, Date.now() - startTime);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

### Swagger Configuration

Swagger is configured in `/lib/swagger.ts`:

```typescript
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next.js Fullstack Template API',
      version: '1.0.0',
      description: 'API documentation for Next.js Fullstack Template',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./app/api/**/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
```

### Morgan HTTP Request Logging

Morgan provides colored HTTP request logging with:
- **Colored Output**: Different colors for different HTTP status codes
- **Response Times**: Track how long each request takes
- **Smart Filtering**: Skips logging for static files and Next.js internals
- **Environment-Aware**: Different log formats for development and production

Example log output:
```
[2025-10-19T12:34:56.789Z] GET /api/users 200 45ms
[2025-10-19T12:34:57.123Z] POST /api/users 201 123ms
[2025-10-19T12:34:58.456Z] GET /api/users/invalid-id 404 12ms
```

## 🧪 Testing

### Setup Testing Framework
```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react

# Add to package.json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Example Test Structure
```
__tests__/
├── unit/
│   ├── components/
│   ├── lib/
│   └── utils/
├── integration/
│   └── api/
└── e2e/
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Add DATABASE_URL to Vercel environment variables
vercel env add DATABASE_URL

# Deploy
vercel
```

### Railway
1. Connect your GitHub repository
2. Add DATABASE_URL environment variable
3. Deploy automatically

### Docker Production
```bash
# Build
docker build -t nextjs-app .

# Run
docker run -p 3000:3000 --env-file .env nextjs-app
```

### Environment-specific Builds
```bash
# Staging
NODE_ENV=staging npm run build

# Production  
NODE_ENV=production npm run build
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run migrations: `npx prisma migrate dev`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Code Standards
- ✅ Follow TypeScript best practices
- ✅ Use meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation
- ✅ Follow existing code style
- ✅ Run Prisma validation before committing

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain the behavior you expected**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the TypeScript and React style guides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

### Development Process

1. **Fork the repo** and create your branch from `main`
2. **Make your changes**
3. **If you've added code**, add tests
4. **Ensure the test suite passes**: `npm test`
5. **Make sure your code lints**: `npm run lint`
6. **Run Prisma validation**: `npx prisma validate`
7. **Test with Docker** if you've changed Docker configuration
8. **Issue that pull request!**

## 👥 Community & Support

- 💬 **Discussions**: [GitHub Discussions](https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE/issues)
- 📖 **Wiki**: [Project Wiki](https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE/wiki)

## 🙏 Acknowledgments

Special thanks to:
- **Developer community** for inspiration
- **Next.js Team** for the amazing framework
- **Prisma Team** for the incredible ORM
- **Vercel** for hosting and serverless functions
- **TailwindCSS Team** for the utility-first CSS framework
- **ShadCN** for the beautiful component library

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by [DimitriTedom (SnowDev)](https://github.com/DimitriTedom)**

**Repository:** [https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE](https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE)

[⭐ Star this repo](https://github.com/DimitriTedom/SNOWDEV-NEXTJS-TEMPLATE) if you found it helpful!

</div>