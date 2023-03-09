import { z } from "zod";
import { t } from "@/trpc/server";
import { exampleRouter } from "@/routers/example";

export const appRouter = t.mergeRouters(exampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
