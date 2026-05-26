# UI Components Rules

## Core Principle

UI components are reusable visual building blocks shared across the ecosystem.

They must remain isolated from business authority.

---

# Allowed Responsibilities

Examples:

- buttons
- cards
- inputs
- modals
- navigation elements
- reusable visual primitives

---

# Forbidden Responsibilities

Avoid:

- feature business logic
- backend orchestration
- provider logic
- domain authority
- infrastructure ownership

---

# Important Principle

UI components must remain:

- reusable
- predictable
- scalable
- design-system aligned

Feature-specific UI belongs inside:

- src/features
