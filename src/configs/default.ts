import packageJson from '../../package.json';

// environment variables
const env = {
  apiUrl: import.meta.env.VITE_API_BASE_URL,
  authKey: import.meta.env.VITE_AUTH_LOCAL_STORAGE_KEY,
};

// default configurations
const config = {
  mode: 'development',
  appVersion: packageJson.version,

  pagination: {
    limit: 10,
  },
  env,
};

export default config;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Config = DeepPartial<typeof config>;
