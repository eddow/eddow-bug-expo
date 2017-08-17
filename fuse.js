const {FuseBox, VuePlugin, QuantumPlugin} = require("fuse-box");
const fuse = FuseBox.init({
	homeDir: "src",
	output: "dist/$name.js",
	plugins: [
		VuePlugin()
	],
	cache: false
});

///This bundle won't produce any .js file and show no error nor warning
fuse.bundle("bndlA")
	.plugin(
		QuantumPlugin({
			target: 'server'
		}))
	.instructions('> index.ts');

fuse.bundle("bndlB")	//no output neither - even if you use another file-name
	.instructions('> index.ts');

fuse.run();
