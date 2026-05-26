# Data Layer Rules

## Core Principle

The data layer is temporary and controlled.

It must not evolve into hidden backend authority.

---

# Allowed Responsibilities

Examples:

- mock data
- temporary local data
- static frontend datasets
- development fixtures

---

# Forbidden Responsibilities

Avoid:

- business authority
- production persistence logic
- backend duplication
- hidden state ownership
- domain orchestration

---

# Important Rules

Prefer:

- feature ownership
- backend ownership
- explicit domain boundaries

Avoid long-term dependency on local frontend data.

---

# Long-Term Goal

The data layer should progressively shrink as backend and domain systems mature.
