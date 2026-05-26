# Lib Layer Rules

## Core Principle

The lib layer is a temporary support layer for controlled utilities and adapters.

It must remain minimal and predictable.

---

# Allowed Responsibilities

Examples:

- lightweight utilities
- temporary adapters
- formatting helpers
- compatibility helpers

---

# Forbidden Responsibilities

Lib must not contain:

- business authority
- feature ownership
- backend orchestration
- domain logic
- uncontrolled abstractions

---

# Important Rules

Prefer:

- feature-local logic
- shared reusable logic
- explicit ownership

Avoid turning lib into a global chaos layer.

---

# Long-Term Goal

The lib layer should remain small and progressively consolidated when architecture stabilizes.
