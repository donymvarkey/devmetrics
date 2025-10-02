interface DBProps {
  host: string | undefined;
  port: string | undefined;
  user: string | undefined;
  password: string | undefined;
  db: string | undefined;
}

interface ServerOptions {
  port: string | undefined;
  db: DBProps;
  env: string | undefined;
  server_url: string | undefined;
}

type THttpResponse = {
  success: boolean;
  statusCode: number;
  request: {
    ip?: string | null;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
};

type THttpError = {
  success: boolean;
  statusCode: number;
  request: {
    ip?: string | null;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
  trace?: object | null;
};

type InfoType = {
  level: string;
  message: string;
  timestamp: Date;
  mta: object;
};

export { ServerOptions, THttpResponse, THttpError, InfoType };
