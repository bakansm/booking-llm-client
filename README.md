# BookingLLM

![Next.js](https://img.shields.io/badge/Next.js-15.3.1-000000?logo=next.js&logoColor=000000)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.12-06B6D4?logo=tailwindcss&logoColor=06B6D4)
![ShadcnUI](https://img.shields.io/badge/ShadcnUI-Latest-000000?logo=shadcnui&logoColor=000000)
![Zustand](https://img.shields.io/badge/Zustand-Latest-000000?logo=zustand&logoColor=000000)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-Latest-EC5990?logo=reacthookform&logoColor=EC5990)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-0055FF?logo=framer&logoColor=0055FF)
![ESLint](https://img.shields.io/badge/ESLint-Latest-4B32C3?logo=eslint&logoColor=4B32C3)
![Prettier](https://img.shields.io/badge/Prettier-Latest-F7B93E?logo=prettier&logoColor=F7B93E)
![Husky](https://img.shields.io/badge/Husky-Latest-FF4088?logo=husky&logoColor=FF4088)
![Lucide React](https://img.shields.io/badge/Lucide_React-Latest-326CE5?logo=lucide&logoColor=326CE5)
![Bun](https://img.shields.io/badge/Bun-Latest-FBF0DF?logo=bun&logoColor=FBF0DF)

## 📖 Table of Contents

1. [🚀 Project Overview](#-project-overview)
2. [📦 Tech Stack](#-tech-stack)
3. [📂 Project Structure](#-project-structure)
4. [🔧 Installation & Setup](#-installation--setup)
5. [🛠 Linting & Code Formatting](#-linting--code-formatting)
6. [📊 Bundle Analysis](#-bundle-analysis)
7. [🔄 Git Commit Rules](#-git-commit-rules)

---

## 🚀 Project Overview

✈️ **BookingLLM: An AI-Powered Travel Booking Web App**
This is not your average travel site—though yes, we’ve got all the good stuff: menus, filters, search bars, and pretty pictures. But what truly sets this platform apart? An intelligent, chat-ready AI Agent that brings a whole new level of ease (and personality) to booking your next adventure.

Whether you're browsing manually or prefer a more conversational approach, the AI is always on standby to:

📍 Recommend and book tours based on your vibe

🏨 Explain hotel details, amenities, and even show you previews

✈️ Compare flights, clarify baggage rules, or just tell you if your layover is going to ruin your day

🤖 Answer any question, from “Can I bring my cat?” to “Is this island secretly full of snakes?” (we won't judge)

You can click and scroll your way to a great trip—or just ask the AI to handle it for you. Your travel experience, your choice.

In short: A beautifully interactive platform with a smart AI travel buddy built right in. Plan it your way—with a little help from your virtual friend. 🌍💬

---

## 📦 Tech Stack

- **Framework**: [Next.js 15.3.1](https://nextjs.org/docs) (App Router)
- **UI Library**: [ShadcnUI](https://ui.shadcn.com) (Built on Radix UI)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/docs)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Form Handling**: [React Hook Form](https://react-hook-form.com)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [ESLint](https://eslint.org/docs/latest/)
- **Formatting**: [Prettier](https://prettier.io/docs/en/index.html)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/#/)
- **Package Manager**: [Bun](https://bun.sh/docs)

---

## 📂 Project Structure

```
.
├── .github/            # CI/CD workflows
├── .husky/             # Git hook scripts
├── .vscode/            # Editor configs
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router (routes & layouts)
│   │   ├── [page]/     # Page-specific, non-reusable components
│   │   ├── common/     # Shared components across app
│   │   ├── layouts/    # Layout structures
│   │   └── ui/         # UI primitives from Shadcn UI
│   ├── constants/      # App-wide constants
│   ├── contexts/       # React context logic
│   ├── hooks/          # Custom hooks
│   ├── libs/           # Utility libraries/helpers
│   ├── providers/      # Context providers (e.g., for Zustand)
│   ├── types/          # TypeScript type definitions
│   └── utils/          # General utility functions
├── .env.example        # Example env file
├── .env.local          # Local env vars
├── Dockerfile
├── docker-compose.yml
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── components.json     # Shadcn UI component registry
├── bun.lock
└── README.md
```

---

## 🔧 Installation & Setup

First, run the development server:

```bash
# Install dependencies
bun install

# Start development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 🛠 Linting & Code Formatting

```bash
# Run linting
bun lint

# Format code
bun format
```

---

## 📊 Bundle Analysis

To analyze the project bundle size:

```bash
ANALYZE=true bun build
```

---

## 🔄 Git Commit Rules

### 💡 Allowed types

- **feat** – New feature
- **fix** – Bug fix
- **docs** – Documentation change
- **style** – Code style update (formatting, no logic change)
- **refactor** – Code refactoring (no bug fix or feature)
- **perf** – Performance improvement
- **test** – Adding or fixing tests
- **chore** – Build process or auxiliary tool changes
- **ci** – CI-related changes
- **build** – Build system or dependencies
- **revert** – Reverting a commit

### Format

```
<type>(<scope>): <subject>
```

Example:

```
feat(booking): implement AI-powered suggestion system
fix(ui): resolve calendar display issues on mobile
docs(readme): update installation instructions
```
