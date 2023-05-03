import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import { prisma } from "@fungi/db";
import { t } from "./server";
import { DeviceMeta, Auth } from "../lib/auth";

// created for each request
const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const session = req.headers.authorization
    ? await Auth.authorizeUser(req.headers.authorization)
    : null;

  return {
    req,
    res,
    db: prisma,
    token: req.headers.authorization,
    session,
    device: {
      type: "mobile_app",
      ip: req.ip,
    } as DeviceMeta,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;

export const mw = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});
