import { z } from "zod";
import { publicProcedure, t } from "../trpc/server";

export const publicationRouter = t.router({
  getPaginated: publicProcedure
    .input(
      z.object({
        perPage: z.number().min(1).max(1000),
        page: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.publication.findMany({
        skip: input.page * input.perPage,
        take: input.perPage,
        select: { content: false, image: true },
      });
    }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string().cuid(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.publication.findUnique({
        where: { id: input.id },
        include: { author: true, image: true },
      });
    }),
});
