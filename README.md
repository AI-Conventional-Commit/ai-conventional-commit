# AI Commit Assistant

Generate conventional and meaningful Git commit messages using the power of an LLM.  
This VSCode extension analyzes your staged `git diff`, sends it to a language model, and suggests a commit message you can edit or accept.

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
