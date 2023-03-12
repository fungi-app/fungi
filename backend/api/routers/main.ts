import { t } from "../trpc/server";
import { exampleRouter } from "./example";

export const appRouter = t.router({
  example: exampleRouter,
});
