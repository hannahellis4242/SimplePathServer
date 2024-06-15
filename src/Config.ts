import { z } from "zod";
import { UsersSchema } from "./Users";

export const ConfigSchema = z.object({
  publicDir: z.string(),
  port: z.number(),
  users: UsersSchema,
});

type Config = z.infer<typeof ConfigSchema>;
export default Config;
