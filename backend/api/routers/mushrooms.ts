import { publicProcedure, editorProcedure, t } from "../trpc/server";
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

  add: editorProcedure
    .input(
      z.object({
        name: z.string(),
        latinName: z.string(),
        redBooked: z.boolean(),
        eatable: z.enum(["NOT_EATABLE", "PARTIALLY_EATABLE", "EATABLE"]),
        description: z.string(),
        familyId: z.number().min(0),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.mushroom.create({ data: input });
    }),
});
