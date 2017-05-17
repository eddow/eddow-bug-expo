const {FuseBox, VuePlugin} = require("fuse-box");
const fuse = FuseBox.init({
	homeDir: "src",
	output: "dist/$name.js",
	plugins: [
		VuePlugin()
	],
	cache: false/*,
	globals: {default: '*'}*/
});
fuse.bundle("bndl")
	.instructions('> index.ts + *.vue');

fuse.run();
