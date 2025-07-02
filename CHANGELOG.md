# Changelog

All notable changes to the **AI Conventional Commit** extension will be documented in this file.

This project adheres to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.0.2] - 2025-06-28

### Added
- Loading indicator while generating commit message.
- GitHub Actions workflows for `build` and `publish` steps.
- Contribution guidelines (`CONTRIBUTING.md`), Code of Conduct, Security Policy, and Support files.

### Changed
- Generate Command button now uses the same icon as the extension for visual consistency.
- Updated extension icon (SVG → PNG) for better compatibility.
- Improved documentation with new badges, setup guidance, and organizational links.

### Chore
- Bumped version to `0.0.2`.
- Updated repository and homepage URLs in `package.json`.

### Added
- Support for configuring preferred model (planned).
- Improved prompts structure (planned).
- Enhanced provider flexibility beyond OpenRouter (planned).

---

## [0.0.1] - 2025-06-27

### Added
- Generate commit messages using a language model via OpenRouter.
- Multi-language support (`en`, `es`, `fr`, `de`) with automatic detection.
- Git input box integration in the VSCode Source Control panel.
- Configurable preferred language in `settings.json`.
- Initial functional version of the extension.
- Basic support for Conventional Commits message generation.

### Chore
- Set initial `publisher` field in `package.json` for VSCode Marketplace publishing.
