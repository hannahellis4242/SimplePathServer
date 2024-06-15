import { z } from "zod";

export const UsersSchema = z.record(z.string(), z.string());

type Users = z.infer<typeof UsersSchema>;
export default Users;
