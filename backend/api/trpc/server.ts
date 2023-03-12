import { initTRPC } from "@trpc/server";
import type { Context } from "../trpc/middleware";

export const t = initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;
