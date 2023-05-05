import { t } from "../trpc/server";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { mushroomsRouter } from "./mushrooms";
import { familiesRouter } from "./families";

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  mushrooms: mushroomsRouter,
  families: familiesRouter,
});
