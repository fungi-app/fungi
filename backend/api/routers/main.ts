import { t } from "../trpc/server";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { mushroomsRouter } from "./mushrooms";
import { publicationRouter } from "./publications";
import { colorRouter } from "./colors"
import { familyRouter } from "./family"

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  mushrooms: mushroomsRouter,
  publications: publicationRouter,
  color: colorRouter,
  family: familyRouter,
});
