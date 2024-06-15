const getConfigPath = (): Promise<string> => {
  const [configFilePath] = process.argv.slice(2);
  if (!configFilePath) {
    return Promise.reject(new Error("No config file given."));
  }
  return Promise.resolve(configFilePath);
};

export default getConfigPath;
