import { readFile } from "fs/promises";
import { ConfigSchema } from "./Config";
import createApp from "./createApp";
import getConfigPath from "./getConfigPath";

(() =>
  getConfigPath()
    .then(readFile)
    .then((buffer) => buffer.toString())
    .then(JSON.parse)
    .then(ConfigSchema.parseAsync)
    .then((config) =>
      createApp(config).listen(config.port, "0.0.0.0", () =>
        console.log(`listening on port ${config.port}`)
      )
    )
    .catch((e) => console.error(e)))();
