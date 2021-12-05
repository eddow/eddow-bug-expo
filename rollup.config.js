import typescript from 'rollup-plugin-typescript2';
import svelte from 'rollup-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.ts',
	output: {
		dir: "dst",
		format: 'es',
		sourcemap: true
	},
	preserveEntrySignatures: false,
	watch: !production && {
		include: ['src/**']
	},
	plugins: [
		typescript({
			allowNonTsExtensions: true
		}),
		svelte({
			compilerOptions: {
				dev: !production
			},
			preprocess: preprocess(),
		}),
		nodeResolve({
			browser: true,
			dedupe: ['svelte']
		})
	]
};