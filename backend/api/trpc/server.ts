import { TRPCError, initTRPC } from "@trpc/server";
import type { Context } from "../trpc/middleware";
import superjson from "superjson";

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});
export const publicProcedure = t.procedure;

const roleLevels = {
  USER: 1,
  EDITOR: 2,
  MODERATOR: 3,
  ADMIN: 4,
};

const isAuthed = (minimumRole: keyof typeof roleLevels) =>
  t.middleware(({ next, ctx }) => {
    if (
      !ctx.token ||
      !ctx.session ||
      roleLevels[ctx.session.user.role] < roleLevels[minimumRole]
    ) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        token: ctx.token,
        session: ctx.session,
        user: ctx.session.user,
      },
    });
  });
// you can reuse this for any procedure
export const protectedProcedure = t.procedure.use(isAuthed("USER"));
export const editorProcedure = t.procedure.use(isAuthed("EDITOR"));
export const moderatorProcedure = t.procedure.use(isAuthed("MODERATOR"));
export const adminProcedure = t.procedure.use(isAuthed("ADMIN"));
