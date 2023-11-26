import { publicProcedure, t } from "../trpc/server";
import { z } from "zod";

export const colorRouter = t.router({
    getById: publicProcedure
        .input(
        z.object({
            id: z.number().min(0),
        })
        )

        .query(async ({ input, ctx }) => {
            return await ctx.db.color.findUnique(
            { 
                where: { id: input.id } 
            });
        }),
    getAll: publicProcedure
        .input(
        z.object({})
        )
        .query(async ({ input, ctx }) => {
            return await ctx.db.color.findMany({});
            }
        ),
});

