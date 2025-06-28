import * as vscode from 'vscode';
import { exec } from 'child_process';
import fetch from 'node-fetch';
import { getPrompt } from './prompts';

function sanitizeMsg(msg: string): string {
	return msg
		.replace(/^```[\s\S]*?```$/gm, '')
		.replace(/^commit message: */i, '')
		.trim();

}
async function inferPreferredLanguage(diff: string, apiKey: string): Promise<string> {
	const body = {
		model: vscode.workspace.getConfiguration().get<string>('aiConvCommit.model') || "deepseek/deepseek-chat-v3-0324:free",
		messages: [
			{
				role: "user",
				content: `Analiza el siguiente diff de código y responde SOLO el idioma en que debería estar el mensaje de commit (ej: "es", "en", "fr", "de"). No agregues nada más:\n\n${diff}`
			}
		]
	};

	const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${apiKey}`
		},
		body: JSON.stringify(body)
	});

	const data: any = await response.json();
	const detected = data.choices?.[0]?.message?.content?.trim().toLowerCase();

	if (["es", "en", "fr", "de"].includes(detected)) { return detected; }
	return "en";
}

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('aiConvCommit.generate', async () => {
		const apiKey = vscode.workspace.getConfiguration().get<string>('aiConvCommit.apiKey');
		if (!apiKey) {
			vscode.window.showErrorMessage('OpenRouter API key is not set!');
			return;
		}

		const gitRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
		if (!gitRoot) { return vscode.window.showErrorMessage('No workspace open.'); }

		exec('git diff --cached', { cwd: gitRoot }, async (err, stdout) => {
			if (err || !stdout) {
				vscode.window.showErrorMessage('No staged changes found.');
				return;
			}
			let lang = vscode.workspace.getConfiguration().get<string>('aiConvCommit.language') || 'auto';

			if (lang === 'auto') {
				try {
					lang = await inferPreferredLanguage(stdout, apiKey);
				} catch {
					lang = 'en';
				}
			}
			const prompt = `${getPrompt(lang)}\n\n${stdout}`;

			const body = {
				model: vscode.workspace.getConfiguration().get<string>('aiConvCommit.model') || "deepseek/deepseek-chat-v3-0324:free",
				messages: [
					{ role: "user", content: prompt }
				]
			};
			try {
				const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${apiKey}`
					},
					body: JSON.stringify(body)
				});

				const data: any = await response.json();
				const msg = sanitizeMsg(data.choices?.[0]?.message?.content?.trim());

				if (!msg) { return vscode.window.showErrorMessage('No se pudo generar el mensaje'); }

				const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
				const api = gitExtension?.getAPI(1);
				const repo = api?.repositories?.[0];
				if (repo) {
					repo.inputBox.value = msg;
				} else {
					vscode.window.showErrorMessage('No se pudo acceder al repositorio Git.');
				}
			} catch (error) {
				vscode.window.showErrorMessage('Error al conectar con OpenRouter.');
			}
		});
	});

	context.subscriptions.push(disposable);

	const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
	const api = gitExtension?.getAPI(1);
	const repo = api?.repositories?.[0];

	if (repo) {
		repo.inputBox.prompt = 'AI Conventional Commit';
		repo.inputBox.placeholder = 'Haz clic en ✨ para generar mensaje automáticamente';
	}
}

export function deactivate() { }
