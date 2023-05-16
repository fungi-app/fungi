import { publicProcedure, t } from "../trpc/server";
import { z } from "zod";

export const mushroomsRouter = t.router({
  getPaginated: publicProcedure
    .input(
      z.object({
        perPage: z.number().min(1).max(1000),
        page: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.mushroom.findMany({
        skip: input.page * input.perPage,
        take: input.perPage,

        include: { family: true },
      });
    }),

  getById: publicProcedure
    .input(
      z.object({
        id: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.mushroom.findUnique({
        where: { id: input.id },
        include: { family: true },
      });
    }),
});
