const prompts: Record<string, string> = {
  en: `
Respond only with a commit message in Conventional Commits format, and strictly in English.

Do not include headers, explanations, or code blocks.

Use this format:

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

Example:
feat(auth): allow token refresh on reconnect

Now generate a commit message based on the following changes:
  `,
  es: `
Responde únicamente con un mensaje de commit en formato Conventional Commits, y estrictamente en español.

No incluyas encabezados, explicaciones ni bloques de código.

Usa este formato:

<type>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie(s) opcional(es)]

Ejemplo:
feat(auth): permitir refrescar el token al reconectar

Ahora genera un mensaje de commit basado en los siguientes cambios:
  `,
  fr: `
Répond uniquement par un message de commit au format Conventional Commits, et strictement en français.

N'inclus ni entête, ni explication, ni bloc de code.

Utilise ce format :

<type>[portée optionnelle] : <description>

[corps optionnel]

[pied(s) optionnel(s)]

Exemple :
feat(auth): autoriser l'actualisation du jeton lors de la reconnexion

Génère maintenant un message de commit basé sur les changements suivants :
  `,
  de: `
Antworte nur mit einer Commit-Nachricht im Format der Conventional Commits – ausschließlich auf Deutsch.

Keine Erklärungen, Überschriften oder Codeblöcke einfügen.

Verwende dieses Format:

<type>[optional scope]: <beschreibung]

[optional body]

[optional footer(s)]

Beispiel:
feat(auth): Token-Aktualisierung bei erneuter Verbindung ermöglichen

Jetzt generiere eine Commit-Nachricht basierend auf den folgenden Änderungen:
  `
};

export function getPrompt(lang: string): string {
  return prompts[lang] ?? prompts['en'];
}
