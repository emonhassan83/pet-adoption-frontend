<div align="center">

# 🐾 Petfinder

**A Modern, Secure Full-Stack Pet Adoption & Management Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?logo=postgresql)](https://www.postgresql.org/)
[![Security Audit](https://img.shields.io/badge/npm%20audit-0%20vulnerabilities-brightgreen?logo=shield)](https://github.com/emonhassan83/petfinder)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Petfinder connects loving families with rescue pets needing forever homes. Featuring robust role-based access control, real-time adoption workflows, community blogging, secure donations, and comprehensive administrative analytics.

[Explore Architecture](docs/ARCHITECTURE.md) · [API Documentation](docs/API_GUIDELINES.md) · [Report Bug](https://github.com/emonhassan83/petfinder/issues)

</div>

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Server)](#1-backend-setup-server)
  - [Frontend Setup (Client)](#2-frontend-setup-client)
- [Environment Variables](#-environment-variables)
- [Database Management (Prisma)](#-database-management-prisma)
- [Security & Zero-Vulnerability Guarantee](#-security--zero-vulnerability-guarantee)
- [Documentation Links](#-documentation-links)
- [Contributing & License](#-contributing--license)

---

## ✨ Key Features

### 🐶 Public & Adopter Experience
- **Dynamic Pet Discovery**: Explore adoptable pets with multi-criteria filtering (species, breed, gender, age, size, and location) alongside full-text search.
- **In-Depth Pet Profiles**: Rich behavioral info, health checkups, vaccination records, temperament traits, and specific adoption criteria.
- **Structured Adoption Applications**: Multi-step adoption questionnaire evaluating household safety, outdoor enclosures, pet experience, and sleeping arrangements.
- **Real-Time Application Tracking**: Live dashboard showing status updates (`PENDING` → `APPROVED` / `REJECTED`).
- **Philanthropic Donations**: Support rescue operations with custom donation amounts, messages, and receipt histories.
- **Community & Knowledge Hub**: Educational blogs, pet care guides, and interactive comment discussions.

### 🛡️ Administrative & Shelter Operations
- **Role-Based Access Control (RBAC)**: Fine-grained permissions separating `USER`, `ADMIN`, and `SUPER_ADMIN`.
- **Pet Inventory Lifecycle**: Create, edit, inspect, and retire pet listings with image hosting integration.
- **Adoption Triage Pipeline**: Review incoming adoption requests, verify questionnaire answers, and approve/reject applications.
- **User & Shelter Management**: Manage accounts, promote staff roles, toggle active/blocked account states, and execute soft deletions.
- **Executive Analytics (`/meta`)**: High-level statistical summaries covering active listings, adoption pipeline metrics, user registrations, and donation volumes.

---

## 🏛 System Architecture

Petfinder operates as a decoupled client-server architecture with strict separation of concerns:

```mermaid
graph TD
    subgraph Client ["Frontend (Next.js 16 App Router)"]
        UI["Material UI & Tailwind CSS"]
        State["Redux Toolkit & RTK Query"]
        AuthCtx["JWT Session & Server Actions"]
    end

    subgraph Gateway ["Transport & Security"]
        CORS["CORS & Cookie Parser"]
        AuthMid["JWT Auth Middleware & RBAC"]
        ZodVal["Zod Schema Validation Engine"]
    end

    subgraph Server ["Backend (Express & TypeScript)"]
        Routes["Modular Routing (/api/v1)"]
        Controllers["Controllers (sendResponse)"]
        Services["Business Logic Services"]
    end

    subgraph Data ["Data & Services"]
        PrismaClient["Prisma ORM (Data Layer)"]
        DB[("PostgreSQL Database")]
        SMTP["Nodemailer (Google SMTP)"]
    end

    Client -->|HTTPS REST API / JSON| Gateway
    Gateway --> Routes
    Routes --> Controllers
    Controllers --> Services
    Services --> PrismaClient
    PrismaClient --> DB
    Services -->|Password Reset Mails| SMTP
```

For an in-depth breakdown of transaction flows, state machines, and sequence diagrams, see [ARCHITECTURE.md](docs/ARCHITECTURE.md).

---

## 🛠 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**, **Material UI (MUI)**, **Tailwind CSS**, **Redux Toolkit**, **React Hook Form**, **Zod** |
| **Backend** | **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, **Bcrypt.js**, **JSON Web Tokens (JWT)**, **Nodemailer**, **Zod 4** |
| **DevOps & Tooling** | **ESLint**, **PostCSS**, **Git**, **Turbopack Compiler**, **Prisma Studio** |

---

## 📂 Project Directory Structure

```text
petfinder/
├── client/                     # Next.js 16 Frontend Application
│   ├── src/
│   │   ├── app/                # App Router (pages, layouts, route groups)
│   │   ├── components/         # Shared & reusable UI components
│   │   ├── redux/              # Redux Toolkit store, slices, RTK Query API
│   │   ├── services/           # Authentication & client-side actions
│   │   ├── types/              # TypeScript interface & type definitions
│   │   └── utils/              # Client-side utility functions & formatters
│   ├── public/                 # Static assets, logos, and images
│   ├── package.json
│   └── tsconfig.json
│
├── server/                     # Express.js & TypeScript Backend API
│   ├── prisma/
│   │   ├── schema.prisma       # Prisma ORM schema & entity relationships
│   │   └── migrations/         # PostgreSQL migration history
│   ├── src/
│   │   ├── app/
│   │   │   ├── middlewares/    # Auth, RBAC, Validation & Error handlers
│   │   │   ├── modules/        # Domain modules (User, Pet, Adoption, Blog, Donate, Meta)
│   │   │   ├── routes/         # Centralized API v1 router
│   │   │   └── shared/         # Shared Prisma client, helpers, and constants
│   │   ├── app.ts              # Express application setup & middleware stack
│   │   └── server.ts           # Server bootstrap & connection lifecycle
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                       # Project Documentation
│   ├── API_GUIDELINES.md       # Complete REST API specifications & endpoints
│   └── ARCHITECTURE.md         # System design, data models & sequence flows
├── .gitignore                  # Global Git ignore rules
└── README.md                   # Project overview & quickstart
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher
- **PostgreSQL**: `v15.x` or higher running locally or hosted (e.g. Neon, Supabase, Railway)
- **Git**

---

### 1. Backend Setup (Server)

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in `server/` using the template below:
   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL="postgresql://username:password@localhost:5432/petfinder_db?schema=public"

   # JWT Secrets
   JWT_SECRET=your_super_secret_jwt_access_key
   EXPIRES_IN=7d
   REFRESH_TOKEN_SECRET=your_super_secret_refresh_key
   REFRESH_TOKEN_EXPIRES_IN=30d

   # Password Recovery
   RESET_PASS_TOKEN=your_reset_token_secret
   RESET_PASS_TOKEN_EXPIRES_IN=15m
   RESET_PASS_LINK=http://localhost:3000/reset-password

   # SMTP Configuration (Nodemailer)
   EMAIL=your-shelter-email@gmail.com
   APP_PASS=your-google-app-password
   ```

4. **Run database migrations & generate Prisma client**:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```
   *The server will start listening at `http://localhost:5000`.*

---

### 2. Frontend Setup (Client)

1. **Navigate to the client directory**:
   ```bash
   cd ../client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in `client/`:
   ```env
   NEXT_PUBLIC_BACKEND_API_URL=http://localhost:5000/api/v1
   ```

4. **Start the Next.js development server with Turbopack**:
   ```bash
   npm run dev
   ```
   *The client will be accessible at `http://localhost:3000`.*

---

## 🔑 Environment Variables Reference

### Backend (`server/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `NODE_ENV` | Runtime environment mode | `development` / `production` |
| `PORT` | API server listen port | `5000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `JWT_SECRET` | Secret key for signing access tokens | `your_secret_hash_32+chars` |
| `EXPIRES_IN` | Access token lifespan | `7d` |
| `REFRESH_TOKEN_SECRET`| Secret key for signing refresh tokens | `your_refresh_secret_hash` |
| `REFRESH_TOKEN_EXPIRES_IN`| Refresh token lifespan | `30d` |
| `RESET_PASS_TOKEN` | Token secret for password resets | `your_reset_secret_hash` |
| `RESET_PASS_TOKEN_EXPIRES_IN` | Password reset link expiration | `15m` |
| `RESET_PASS_LINK` | Frontend URL for password reset page | `http://localhost:3000/reset-password` |
| `EMAIL` | Shelter sender email for reset emails | `notifications@petfinder.org` |
| `APP_PASS` | Sender email app password | `abcd efgh ijkl mnop` |

### Frontend (`client/.env.local`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_BACKEND_API_URL` | Public endpoint of the backend API | `http://localhost:5000/api/v1` |

---

## 🗄 Database Management (Prisma)

Petfinder uses Prisma ORM for fully type-safe database access and automatic migrations:

- **Run interactive GUI database manager**:
  ```bash
  cd server && npx prisma studio
  ```
- **Apply migrations in development**:
  ```bash
  npx prisma migrate dev
  ```
- **Deploy migrations in production**:
  ```bash
  npx prisma migrate deploy
  ```
- **Re-generate TypeScript client after schema changes**:
  ```bash
  npx prisma generate
  ```

---

## 🔒 Security & Zero-Vulnerability Guarantee

Petfinder adheres to rigorous software engineering and security practices:

- **0 Known Vulnerabilities**: Both `client` and `server` pass `npm audit` with **0 vulnerabilities**.
- **Sanitized Supply Chain**: Completely free of malicious injection scripts and unauthorized dependencies.
- **Authentication**: Stateless JWT access tokens with long-lived HTTP-only refresh tokens.
- **Password Protection**: One-way hashing using salted `bcrypt` rounds.
- **Type-Safe Validation**: Every inbound HTTP request payload is strictly validated via **Zod schemas** before reaching controller logic.
- **SQL Injection Prevention**: Prisma ORM executes parameterized queries under the hood, neutralizing SQL injection vectors.

---

## 📚 Documentation Links

Detailed engineering documentation is maintained in the `docs/` directory:

- 📘 [API Guidelines & Endpoints](docs/API_GUIDELINES.md) — Comprehensive guide covering API standards, status codes, query filtering, and every available endpoint across all 8 modules.
- 📐 [System Architecture & Design Blueprint](docs/ARCHITECTURE.md) — Entity-relationship diagrams, layered backend architecture, adoption state machine, and data flow specifications.

---

## 🤝 Contributing & License

Contributions, feedback, and pull requests are warmly welcomed!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Distributed under the **MIT License**. See `LICENSE` for more information.

