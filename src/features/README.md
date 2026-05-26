# Features Layer Rules

## Core Principle

Features are the primary business and experience units of the frontend architecture.

Each feature owns its internal logic, UI composition, and local workflows.

---

# Allowed Responsibilities

Examples:

- feature UI
- feature hooks
- feature state
- feature composition
- feature routing logic

---

# Feature Isolation

Features must remain isolated.

Avoid:

- cross-feature coupling
- hidden dependencies
- shared business chaos

---

# Shared Usage Rules

Use shared only for:

- truly reusable logic
- cross-feature utilities
- ecosystem-wide resources

Otherwise:
keep ownership inside feature.

---

# UI Usage Rules

Reusable UI belongs in:

- src/ui

Feature-specific UI stays inside:

- src/features

---

# Important Principle

Prefer:

- local ownership
- isolated evolution
- predictable scalability

Avoid premature abstractions.
