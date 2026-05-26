# Hooks Layer Rules

## Core Principle

Global hooks must remain minimal and carefully controlled.

Prefer local feature ownership whenever possible.

---

# Preferred Priority

Priority order:

1. feature hooks
2. shared reusable hooks
3. global hooks only if truly necessary

---

# Forbidden Patterns

Avoid:

- business authority inside global hooks
- feature coupling
- hidden side effects
- oversized global state logic

---

# Allowed Usage

Examples:

- viewport hooks
- theme hooks
- lightweight reusable utilities
- cross-application helpers

---

# Long-Term Goal

Most hooks should progressively move toward:

- feature ownership
- shared reusable ownership

Global hooks should remain minimal.
