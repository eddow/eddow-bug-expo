const {FuseBox, VuePlugin, QuantumPlugin} = require("fuse-box");
const fuse = FuseBox.init({
	homeDir: "src",
	output: "dist/$name.js",
	plugins: [
		VuePlugin()
	],
	cache: false
});
fuse.bundle("bndl")
	.plugin(
		QuantumPlugin({
			target: 'server'
		}))
	.instructions('> index.ts');

fuse.run();
