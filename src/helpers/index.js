const dev = import.meta.env.MODE === "development";
const env = import.meta.env;
const Helper = {
  api: dev ? env.VITE_DEV_API : env.VITE_API,
  env, dev
}

export default Helper