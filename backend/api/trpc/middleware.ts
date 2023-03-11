import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import { prisma } from "@fungi/db";

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
  db: prisma,
});

export type Context = inferAsyncReturnType<typeof createContext>;

export const mw = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});
