# App Layer Rules

## Core Principle

The app layer controls routing, layouts, and application entry structure.

It must remain clean, scalable, and orchestration-oriented.

---

# Allowed Responsibilities

Examples:

- routing
- layouts
- route groups
- navigation entry points
- page orchestration

---

# Forbidden Responsibilities

Avoid:

- business authority
- provider logic
- backend orchestration
- reusable UI ownership
- hidden feature logic

---

# Feature Rules

Features should remain owned by:

- src/features

The app layer orchestrates features but does not absorb them.

---

# UI Rules

Reusable UI belongs in:

- src/ui

Avoid duplicated UI ownership inside app.

---

# Important Principle

The app layer coordinates frontend structure.

It should remain:

- lightweight
- predictable
- scalable
- routing-focused
