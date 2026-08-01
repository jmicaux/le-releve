# Security Policy

## Supported versions

Only the latest release (**0.8.7**) receives security fixes.

| Version | Supported |
| ------- | --------- |
| 0.8.7   | ✅        |
| < 0.8.7 | ❌        |

## Reporting a vulnerability

Please **do not** open a public issue for security problems.

Report vulnerabilities privately via GitHub's
[private vulnerability reporting](https://github.com/jmicaux/le-releve/security/advisories/new)
— on the repository, go to **Security → Advisories → Report a vulnerability**. This keeps the
report private and notifies the maintainer directly (no public issue).

Include:
- a description of the issue and its impact,
- steps to reproduce (or a proof of concept),
- the affected version and browser.

You can expect an acknowledgement within a few days. Once a fix is available, a new
release will be published and the advisory disclosed.

## Scope

Le Relevé is a static, dependency-light web app that visualizes French public
finances. It fetches open budget data from public APIs at build time (and, when
available, live in the browser) and caches snapshots in `localStorage`. It uses no
third-party credentials and collects no personal data. Reports about the upstream
data providers themselves are out of scope.
