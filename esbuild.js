import * as esbuild from "esbuild";
import { renameSync } from "fs";

// Mantener esta ruta final explícita
const outfile = 'dist/extension.js';

async function main() {
	const ctx = await esbuild.context({
		entryPoints: ['src/extension.ts'],
		bundle: true,
		format: 'esm',
		platform: 'node',
		sourcemap: true,
		minify: false,
		outfile: outfile,
		external: ['vscode'],
		logLevel: 'info',
		plugins: [],
	});

	await ctx.rebuild();
	await ctx.dispose();

	const fallback = outfile + '.js';
	try {
		renameSync(fallback, outfile);
		console.warn(`⚠️ Renamed ${fallback} -> ${outfile}`);
	} catch (_) {}
}
main().catch(console.error);
