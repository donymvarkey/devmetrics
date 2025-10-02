import DotenvFlow from 'dotenv-flow';

DotenvFlow.config();

export default {
  port: process.env.PORT,
  env: process.env.ENV,
  server_url: process.env.SERVER_URL,
  secret: process.env.SECRET,
  db: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    db: process.env.DB
  }
};
