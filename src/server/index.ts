import { join } from "path";
import { $log, Configuration, Inject, PlatformApplication, Res } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import config from '@config';

const rootDir = __dirname;
const clientDir = join(rootDir, '../client');
console.log('clientDir: ' + clientDir);

@Configuration({
	rootDir,
	port: config.http.port,
	statics: {"/": [{root: clientDir}]}
})
export class Server {}

async function bootstrap() {
	try {
		$log.debug("Start server...");
		const platform = await PlatformExpress.bootstrap(Server, {});
		await platform.listen();
		$log.debug("Server initialized");
	} catch (er) {
		$log.error(er);
	}
}

bootstrap();