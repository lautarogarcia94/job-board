# JobBoard

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-3.3-green)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.3-purple)](https://vitejs.dev/)
[![React Query](https://img.shields.io/badge/React%20Query-4-orange)](https://tanstack.com/query/latest)
[![React Router](https://img.shields.io/badge/React%20Router-6-red)](https://reactrouter.com/)

**JobBoard** is a React + TypeScript app demonstrating CRUD functionality for job listings. It showcases modern frontend practices like Suspense data fetching, granular error boundaries, type-safe forms, and responsive design—ideal for portfolio and demonstrating expertise.

---

## Features

- **Job Management (CRUD)**: Create, view, edit, and delete job listings.
- **Dynamic Forms**: Built with React Hook Form and TypeScript for type-safe input handling.
- **Data Fetching with React Query**: Suspense-enabled queries, caching, and automatic invalidation after mutations.
- **Error Handling**:
  - Generic `ErrorBoundary` for app-wide errors.
  - Component-specific boundaries for fetch failures with reload functionality.
  - `ErrorPage` for React Router errors.
  - NotFound page with navigation back to home.
- **Reusable UI Components**: Cards, buttons, inputs, and layout elements.
- **Loading Indicators**: Spinners during fetches and mutations for better UX.
- **Routing**: React Router v6 with dynamic pages for all jobs, home page highlights, and job details.
- **Styling**: Tailwind CSS for responsive, clean UI.
- **Backend**: Mocked with `json-server` for demo purposes.

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Forms:** React Hook Form
- **Routing:** React Router v6
- **Data Fetching:** React Query (with Suspense)
- **Styling:** Tailwind CSS
- **Backend Mock:** json-server
- **Error Handling:** ErrorBoundary components and ErrorPage

---

## Project Structure

src/
├─ api/ # API functions (fetch, create, update jobs)
├─ assets/ # Static assets (images, logos)
├─ components/ # Reusable UI components
│ ├─ cards/
│ ├─ forms/
│ └─ sections/ # Composed components (HomeInfoCards)
├─ constants/ # Static data (homeCards)
├─ data/ # jobs.json for json-server
├─ layouts/ # Layout components
├─ pages/ # App pages (AddJob, EditJob, Jobs, JobDetails, Home)
├─ query/ # React Query client setup
├─ types/ # TypeScript type definitions
├─ helpers/ # Domain-specific helpers (jobFormHelpers)
├─ App.tsx
├─ main.tsx
└─ index.html/css

---

## ⚡ Getting Started

1. **Clone the repository**

```bash
git clone <repo-url>
cd <repo-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the mock backend**

```bash
npm run server
```

4. **Start the frontend**

```bash
npm run dev
```

5. **Open http://localhost:3000 (or your Vite dev server URL) to view the app\***

---

## Usage

- Home Page: Shows featured jobs with cards.
- Jobs Page: Displays all job listings.
- Job Details: View a single job in detail.
- CRUD Actions: Create, edit, or delete jobs. Spinner indicates action in progress.
- Error Handling: Component-specific boundaries show reload button for failed fetches.
- Routing Errors: ErrorPage and NotFound page redirect users appropriately.

## Portfolio Highlights

- Modern React best practices: Suspense, React Query caching and invalidation, type-safe forms.
- Granular UX: Component-level error boundaries, spinners during loading/mutations.
- Clean, modular architecture: Clear separation of components, layouts, pages, helpers, constants, and types.
- Fully typed with TypeScript, demonstrating professional-level frontend skills.

## License

- This project is open source for portfolio/demo purposes.
