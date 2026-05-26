# Frontend Structure Rules

## Core Principle

Frontend structure must remain scalable, predictable, and collaboration-friendly.

The objective is controlled growth without architectural chaos.

---

# Folder Responsibilities

## src/features

Contains:

- business features
- isolated feature logic
- feature UI composition
- feature-specific hooks
- feature-specific state

Examples:

- creators
- network
- editorial
- explore
- future

Rules:

- features remain isolated
- avoid cross-feature coupling
- avoid shared logic duplication

---

## src/ui

Contains reusable UI system layers.

Examples:

- layouts
- navigation
- reusable UI primitives
- design-system-oriented components

Rules:

- UI must remain business-agnostic
- reusable across ecosystem
- no feature authority

---

## src/shared

Contains shared cross-ecosystem utilities.

Examples:

- constants
- shared types
- shared hooks
- shared utilities

Rules:

- only truly shared logic belongs here
- avoid turning shared into global chaos

---

## src/components

Legacy transitional layer.

Current status:

- frozen
- no new components allowed
- progressive migration planned

Rules:

- avoid creating new files here
- migrate progressively toward:
  - src/ui
  - src/features

---

## src/lib

Temporary support layer.

Rules:

- keep minimal
- avoid business authority
- avoid uncontrolled utility growth

Long-term goal:
controlled extraction or consolidation.

---

## src/hooks

Temporary global hooks layer.

Rules:

- prefer feature hooks
- prefer shared hooks only when truly reusable
- avoid global hook chaos

---

## src/data

Temporary local/static data layer.

Rules:

- avoid business authority
- avoid backend duplication
- avoid domain leakage

Long-term goal:
progressive backend/domain alignment.

---

# Migration Strategy

Current strategy:

- freeze unstable legacy patterns
- migrate gradually
- avoid massive refactors
- prioritize operational stability

---

# Important Principle

Architecture evolves progressively.

Avoid:
- chaotic rewrites
- uncontrolled restructuring
- premature optimization
- duplicated systems

Stability first.
