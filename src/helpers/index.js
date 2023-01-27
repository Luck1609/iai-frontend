const Helper = {
  dev: import.meta.env.MODE === "development",
  env: import.meta.env,
  AppUrl: import.meta.env.MODE === "development" 
    ?  import.meta.env.VITE_DEV_API
    : import.meta.env.VITE_API
}

export default Helper