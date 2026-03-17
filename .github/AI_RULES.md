# GEMINI.md

## Project Context

This is a frontend application.
The AI assistant must follow the architecture and coding conventions defined in this file when suggesting code or solutions.

---

# Tech Stack

* React
* TypeScript
* TailwindCSS

Do NOT introduce new libraries unless explicitly requested.

---

# Code Style

## Components

* Always use **functional components**
* Use **TypeScript interfaces** for props
* Prefer **small reusable components**
* Avoid components longer than ~150 lines

Example structure:

/components
/ui
/forms
/layout

---

## Hooks

* Custom hooks must start with `use`
* Place them in `/hooks`
* Hooks must encapsulate logic, not UI

Example:

/hooks/useUserData.ts

---

## State Management

Rules:

* Avoid unnecessary global state
* Prefer local state when possible

---

## Styling

* Use **TailwindCSS only**
* Avoid CSS files
* Avoid inline styles

Good:

className="flex items-center gap-2"

Bad:

style={{ display: "flex" }}

---

## Folder Structure

Feature-based architecture:

/features
/auth
/dashboard
/profile

Each feature may contain:

components
hooks
services
types

Example:

/features/auth
components
hooks
services
types

---

## API Layer

All API calls must be isolated.

/services/api

Rules:

* No fetch calls inside components
* Use service functions

Example:

services/userService.ts

---

## Naming Conventions

Components → PascalCase
Hooks → camelCase starting with "use"
Files → camelCase

Examples:

UserCard.tsx
useUserProfile.ts
authService.ts

---

## Performance Rules

Prefer:

* memo
* useMemo
* useCallback

Avoid unnecessary re-renders.

---

## What the AI must NOT do

Do not:

* Introduce new state libraries
* Change architecture
* Add CSS frameworks
* Move files outside the defined structure

If unsure, ask before making architectural changes.

---

## Expected AI Behavior

When answering:

1. Respect the project structure.
2. Follow the defined stack.
3. Suggest minimal and clean solutions.
4. Prefer maintainability over clever code.

If a solution breaks these rules, explain why.

---

## AI Specific Prompts & Workflows

Como asistente de IA (Antigravity), **debes** seguir las instrucciones detalladas en los archivos de la carpeta `.github/prompts/` según sea necesario:

* **Para UI y Estilos:** Sigue estrictamente `.github/prompts/tailwindcss.prompt.md`.
* **Para Generar Commits (Botón Generate):** Antes de proponer un mensaje de commit, **debes leer y aplicar estrictamente** las reglas definidas en `.github/prompts/git-commits.prompt.md`. Nunca autoejecutes el commit final en consola.
