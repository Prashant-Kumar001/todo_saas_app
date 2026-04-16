# 📝 Todo SaaS App

A modern, full-featured Todo application built as a Software-as-a-Service platform. Manage your tasks efficiently with a sleek UI, real-time updates, and enterprise-grade authentication.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwind-css)](https://tailwindcss.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)](https://www.postgresql.org)

---

## 🎯 Project Overview

Todo SaaS App is a powerful task management application designed for individuals and teams. It provides a seamless experience for organizing, tracking, and completing tasks with modern web technologies.

### ✨ Key Features

- **🔐 Secure Authentication** - Built-in auth via Clerk for seamless user management
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **🎨 Beautiful UI** - Modern, intuitive interface with smooth animations
- **🌓 Dark Mode Support** - Toggle between light and dark themes
- **⚡ Real-time Updates** - Instant synchronization across devices
- **💾 Persistent Storage** - PostgreSQL database for reliable data management
- **🔄 State Management** - Redux Toolkit for efficient state handling
- **🎯 Task Organization** - Create, edit, delete, and manage tasks effortlessly
- **📊 Task Analytics** - Track your productivity and task completion
- **🚀 Production Ready** - Optimized performance and deployment ready

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.6** - React framework for production
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Lucide React** - Beautiful SVG icons
- **Next Themes** - Dark mode support

### Backend & Database
- **Node.js** - Runtime environment
- **PostgreSQL** - Relational database
- **Prisma 7.4.2** - ORM for database operations
- **Prisma Adapter PG** - PostgreSQL adapter

### Authentication & Services
- **Clerk** - Modern authentication platform
- **Svix** - Webhook management

### State Management
- **Redux Toolkit 2.11.2** - Predictable state management
- **React Redux 9.2.0** - Redux bindings for React

### Utilities
- **date-fns** - Modern date utility library
- **Sonner** - Toast notifications
- **class-variance-authority** - CSS class management
- **React Icons** - Icon library

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** or **pnpm** or **bun**
- **PostgreSQL** (v13 or higher)
- **Git**

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Prashant-Kumar001/todo_saas_app.git
cd todo_saas_app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/todo_saas_db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
CLERK_WEBHOOK_SECRET=your_webhook_secret

# Svix (for webhooks)
SVIX_AUTH_TOKEN=your_svix_token

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set Up Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed database (optional)
npx prisma db seed
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📖 Usage Guide

### Creating a Task

1. Click the **"Add Task"** button
2. Enter your task title and description
3. Set priority and due date (optional)
4. Click **"Create"**

### Managing Tasks

- **Edit** - Click the edit icon to modify task details
- **Complete** - Mark tasks as done with the checkbox
- **Delete** - Remove tasks with the delete button
- **Filter** - Sort by status, priority, or due date
- **Search** - Find tasks quickly with the search bar

### User Settings

- **Profile** - Manage your profile information
- **Theme** - Switch between light and dark mode
- **Notifications** - Configure notification preferences
- **Account** - Manage security and linked accounts

---

## 🏗️ Project Structure

```
todo_saas_app/
├── app/                          # Next.js app directory
│   ├── (auth)/                  # Authentication routes
│   ├── (dashboard)/             # Dashboard routes
│   ├── api/                     # API routes
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                  # Reusable React components
│   ├── ui/                      # UI components (Radix + Tailwind)
│   ├── tasks/                   # Task-related components
│   └── navbar/                  # Navigation components
├── lib/                         # Utility functions
│   ├── prisma.ts               # Prisma client
│   └── utils.ts                # Helper functions
├── store/                       # Redux store
│   ├── slices/                 # Redux slices
│   └── index.ts                # Store configuration
├── prisma/                      # Database schema
│   └── schema.prisma           # Prisma schema
├── public/                      # Static files
├── styles/                      # Global styles
├── .env.local                   # Environment variables (gitignored)
├── package.json                 # Project dependencies
└── tsconfig.json               # TypeScript configuration
```

---

## 🔄 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Database
```bash
npx prisma migrate dev           # Run migrations
npx prisma migrate deploy        # Deploy migrations
npx prisma studio               # Open Prisma Studio
npx prisma generate             # Generate Prisma client
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
```bash
Click the "Fork" button on GitHub
```

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/todo_saas_app.git
cd todo_saas_app
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 4. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: amazing feature"
```

### Commit Message Guidelines
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Tests

### 6. Push to Your Fork
```bash
git push origin feature/amazing-feature
```

### 7. Open a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Fill in the PR description
- Wait for review and feedback

### Coding Standards
- Use TypeScript for type safety
- Follow ESLint configuration
- Write descriptive variable and function names
- Use meaningful comments
- Keep functions small and focused
- Write unit tests for new features

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a feature idea? We'd love to hear from you!

### Reporting Bugs
1. Check if the issue already exists
2. Provide a clear description
3. Include steps to reproduce
4. Share your environment details

### Requesting Features
1. Check existing feature requests
2. Describe the use case
3. Explain the expected behavior
4. Provide mockups if applicable

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) - Authentication platform
- [Prisma](https://www.prisma.io) - Database ORM
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Radix UI](https://www.radix-ui.com) - Accessible components
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Next.js](https://nextjs.org) - React framework

---

## 📞 Support

Need help? Here are some resources:

- 📚 [Documentation](https://github.com/Prashant-Kumar001/todo_saas_app/wiki)
- 💬 [Discussions](https://github.com/Prashant-Kumar001/todo_saas_app/discussions)
- 🐛 [Issues](https://github.com/Prashant-Kumar001/todo_saas_app/issues)
- 📧 Email: your-email@example.com

---

## 🎉 Thank You!

Thank you for using Todo SaaS App! If you found it helpful, please consider giving us a ⭐ on GitHub.

**Happy tasking! ✨**