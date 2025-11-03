# 🚀 Fullstack TypeScript App with Bun, Elysia, Drizzle ORM & Vue 3

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Bun](https://img.shields.io/badge/Bun-%23FF5C00?style=flat\&logo=bun)](https://bun.sh/)
[![Vue 3](https://img.shields.io/badge/Vue-3.5.22-brightgreen?style=flat\&logo=vue.js)](https://vuejs.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-blue?style=flat)](https://orm.drizzle.team/)
[![Elysia](https://img.shields.io/badge/Elysia-1.4.15-purple?style=flat)](https://elysiajs.com/)

A modern fullstack TypeScript application with a **type-safe API**, PostgreSQL database, and fast development workflow. Ideal for scalable web apps and developer productivity.

---

## 🌟 Features

* **Backend**

  * Bun runtime with hot-reload
  * Elysia framework for fast APIs
  * PostgreSQL + Drizzle ORM
  * Type-safe queries & migrations
  * Rate limiting & CORS

* **Frontend**

  * Vue 3 with Composition API
  * Pinia state management
  * Vue Router
  * TailwindCSS + tailwind-merge
  * OpenAPI-generated client

* **Dev Tools**

  * ESLint, OXLint, Prettier
  * Pino logging
  * Database seeds & migrations via Drizzle Kit

---

## 🛠️ Getting Started

### Backend

```bash
bun install
bun run dev       # Start dev server
bun db:push      # Push schema
bun db:migrate   # Run migrations
bun db:seed  # Seed database
```

### Frontend

```bash
bun install
npm run dev       # Start frontend
npm run build     # Build production
npm run preview   # Preview build
```

### Generate Type-Safe API Client

```bash
npm run api
```

---

## 📂 Project Structure

```
/api      # Backend (Elysia + Drizzle ORM)
/web      # Frontend (Vue 3 + Pinia + TailwindCSS)
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/xyz`
3. Commit changes: `git commit -m "Add xyz"`
4. Push branch: `git push origin feature/xyz`
5. Open a pull request

---

## 📜 License

MIT © [Your Name]

---

## 🔗 Links

* [Bun](https://bun.sh/)
* [Elysia](https://elysiajs.com/)
* [Drizzle ORM](https://orm.drizzle.team/)
* [Vue 3](https://vuejs.org/)
