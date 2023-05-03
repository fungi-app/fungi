import { t } from "../trpc/server";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { mushroomsRouter } from "./mushrooms";

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  mushrooms: mushroomsRouter,
});
