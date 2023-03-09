import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "@/trpc/router";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

export type Context = inferAsyncReturnType<typeof createContext>;

export const mw = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});
