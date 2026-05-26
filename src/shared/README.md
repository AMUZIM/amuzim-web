# Shared Layer Rules

## Core Principle

Shared contains only truly reusable cross-ecosystem resources.

Avoid turning shared into a global dumping folder.

---

# Allowed Responsibilities

Examples:

- constants
- shared types
- reusable utilities
- shared hooks
- cross-feature helpers

---

# Forbidden Responsibilities

Shared must not contain:

- feature business logic
- domain authority
- backend orchestration
- feature-specific UI
- infrastructure ownership

---

# Shared Rules

Only move logic into shared if:

- reused across multiple features
- ecosystem reusable
- not feature-owned

Otherwise:
keep inside feature.

---

# Important Principle

Prefer:

- feature isolation
- local ownership
- controlled reuse

Avoid premature abstraction.
