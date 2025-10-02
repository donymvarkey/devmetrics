import config from './src/config';
import Server from './src/Server';
import { ServerOptions } from './src/types';

const options: ServerOptions = {
  port: config.port,
  db: config.db,
  env: config.env,
  server_url: config.server_url
};

const app = new Server(options);

void app.startServer();
