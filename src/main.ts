import { readFile } from "fs/promises";
import createApp from "./createApp";
import { UsersSchema } from "./Users";
import { join } from "path";

const usersPath = join("/", "app", "users.json");
const publicPath = join("/", "app", "public");

(() =>
  readFile(usersPath)
    .then((buffer) => buffer.toString())
    .then(JSON.parse)
    .then(UsersSchema.parseAsync)
    .then((users) =>
      createApp(users, publicPath).listen(3000, "0.0.0.0", () =>
        console.log(`listening on port 3000`)
      )
    )
    .catch((e) => console.error(e)))();
