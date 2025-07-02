# AI Commit Assistant

[![Version](https://vsmarketplacebadges.dev/version/AIConventionalCommit.ai-conventional-commit.png)](https://marketplace.visualstudio.com/items?itemName=AIConventionalCommit.ai-conventional-commit)   [![Downloads](https://vsmarketplacebadges.dev/downloads-short/AIConventionalCommit.ai-conventional-commit.png)](https://marketplace.visualstudio.com/items?itemName=AIConventionalCommit.ai-conventional-commit)   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.png)](./LICENSE)   [![Last Commit](https://img.shields.io/github/last-commit/AI-Conventional-Commit/ai-conventional-commit.png)](https://github.com/AI-Conventional-Commit/ai-conventional-commit/commits/main)   [![Issues](https://img.shields.io/github/issues/AI-Conventional-Commit/ai-conventional-commit.png)](https://github.com/AI-Conventional-Commit/ai-conventional-commit/issues)

Generate conventional and meaningful Git commit messages using the power of an LLM.  
This VSCode extension analyzes your staged `git diff`, sends it to a language model, and suggests a commit message you can edit or accept.

---

## ⚙️ Requirements

- [Visual Studio Code](https://code.visualstudio.com/) v1.101.0 or newer
- [Node.js](https://nodejs.org/) (for development or local builds)
- An [OpenRouter](https://openrouter.ai) API key

---

## 🚀 Installation

**From VSCode Marketplace (recommended):**
1. Search for `AI Conventional Commit` in the Extensions panel.
2. Click **Install**.

**From source (development):**
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Press `F5` in VSCode to launch the extension in a new Extension Development Host window.

---

## 🏁 Getting Started

1. Stage your changes in Git.
2. Open the Source Control panel in VSCode.
3. Click the **AI Conventional Commit** button or run the `AI Conventional Commit: Generate conventional commit` command.
4. Review and edit the suggested commit message, then commit as usual.

---

## ✨ Features

- 📋 Uses staged changes (`git diff --cached`)
- 🧠 Summarizes changes into clean, conventional commit messages
- 🈯 Supports multiple languages: English, Spanish, French, German
- ✅ Keeps you in control: review and edit the message before committing
- 🛡️ No telemetry, no vendor lock-in

> ⚠️ **Note**: Multi-provider and endpoint configuration is planned but not implemented in this version.  
> Currently, it uses the [OpenRouter](https://openrouter.ai) API with the `deepseek-chat` model.

## 🛠 Configuration

Add your OpenRouter API key and preferred language in your `settings.json`:

```json
{
  "aiConvCommit.model": "your-preferred-model-here",
  "aiConvCommit.apiKey": "your-api-key-here",
  "aiConvCommit.language": "auto"
}
```

---

## 🧑‍💻 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 🛡️ Security

If you discover a security vulnerability, please see [SECURITY.md](./SECURITY.md) for how to report it.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).