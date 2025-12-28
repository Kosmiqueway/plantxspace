# Contributing to OrbitalBiosystems

We prioritize clarity, evidence, and sustainability. Please keep contributions concise, traceable, and well-scoped.

## Two-lane system
- **CANON:** Curated, evidence-tagged content. Requires all mandatory metadata and an evidence rationale.
- **SANDBOX:** Community ideas and experiments. Clearly non-peer-reviewed; use level_of_evidence = L0 and review_status = "sandbox".

## Content requirements
For all collections (library, topics, protocols, models, glossary, sandbox):
- Required frontmatter: title, summary (40–120 words), tags, source URL, year, level_of_evidence (L0–L3), evidence_rationale.
- Additional fields per collection as defined in `src/content.config.ts`.
- Reject content without required metadata or with missing rationale.

## Process
1. Open an issue describing the change (content or code) and the evidence level.
2. Fork and branch: `feat/<short-topic>` or `fix/<short-topic>`.
3. Add or update content with required fields; keep summaries concise (40–120 words).
4. Add sources and attribution. No invented data or affiliations.
5. Submit a PR referencing the issue; expect review within 5 business days.

## Style and tone
- Evidence-first, plain language, no marketing hype.
- Provide context and limitations. State assumptions explicitly.
- Prefer bullet points and short paragraphs for readability.

## Tests and checks
- `npm run build` before submitting.
- Link checker CI will flag broken external links.

## Conduct
All participants must follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
