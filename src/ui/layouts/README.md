# Layouts Rules

## Core Principle

Layouts provide reusable structural composition across the ecosystem.

Layouts remain reusable and business-agnostic.

---

# Allowed Responsibilities

Examples:

- page shells
- responsive structures
- navigation wrappers
- dashboard layouts
- content containers

---

# Forbidden Responsibilities

Avoid:

- feature business logic
- backend orchestration
- provider authority
- hidden feature ownership

---

# Important Principle

Layouts coordinate structure only.

Feature logic belongs inside:

- src/features
