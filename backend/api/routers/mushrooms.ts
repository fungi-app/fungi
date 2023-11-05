import { publicProcedure, editorProcedure, t } from "../trpc/server";
import { z } from "zod";
import { EATABLE_GRADE, HYMENOPHORE, FOOT_TYPE, HEAD_TYPE } from "@fungi/db"

// enum (EatableGrade)

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

        include: { family: true, images: true, foot_color: true, head_color: true },
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
        include: { family: true, images: true, foot_color: true, head_color: true },
      });
    }),

    create: editorProcedure  
    .input(
      z.object({
        name: z.string().min(1).max(255),
        latinName: z.string().regex(/\p{Latin}/),
        redBooked: z.boolean(),
        description: z.string().min(1),
        synonymousNames: z.array(z.string().min(1).max(255)),
        eatable: z.nativeEnum(EATABLE_GRADE),

        have_foot: z.boolean(),
        foot_size_from: z.number().min(0),
        foot_size_to: z.number().min(0),
        foot_type: z.nativeEnum(FOOT_TYPE),

        head_type: z.nativeEnum(HEAD_TYPE),
        hymenophore: z.nativeEnum(HYMENOPHORE),

        head_color: z.array(z.number().min(0)),
        foot_color: z.array(z.number().min(0)),
        doubles: z.number(),

        family: z.number()
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = {
        data: input
      }
      const mushroom = await ctx.db.mushroom.create(data);

      return mushroom;
    }),
});