import { Auth } from "../lib/auth";
import { protectedProcedure, publicProcedure, t } from "../trpc/server";
import { z } from "zod";

export const authRouter = t.router({
  register: publicProcedure
    .input(
      z.object({
        nickname: z.string().regex(/[A-Za-z0-9_]{3, 20}/),
        username: z.string().min(1).max(50),
        email: z.string().email(),
        password: z.string().regex(/.{3,}/),
      })
    )
    .query(async ({ input, ctx }) => {
      return await Auth.registerUser(
        input.username,
        input.nickname,
        input.email,
        input.password,
        ctx.device
      );
    }),

  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().regex(/.{3,}/),
      })
    )
    .query(async ({ input, ctx }) => {
      const session = await Auth.authenticateUser(
        input.email,
        input.password,
        ctx.device
      );
      if (!session) return null;
      return session;
    }),

  logout: protectedProcedure.query(async ({ ctx }) => {
    await Auth.invalidateSessionByToken(ctx.token);
  }),
});
