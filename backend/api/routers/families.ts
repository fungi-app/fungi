import { publicProcedure, editorProcedure, t } from "../trpc/server";
import { z } from "zod";

export const familiesRouter = t.router({
  getPaginated: publicProcedure
    .input(
      z.object({
        perPage: z.number().min(1).max(1000),
        page: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.family.findMany({
        skip: input.page * input.perPage,
        take: input.perPage,
      });
    }),

  getById: publicProcedure
    .input(
      z.object({
        id: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.family.findUnique({
        where: { id: input.id },
      });
    }),

  add: editorProcedure
    .input(
      z.object({
        name: z.string(),
        latinName: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.family.create({ data: input });
    }),
});
