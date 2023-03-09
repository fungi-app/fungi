import { publicProcedure, t } from "@/trpc/server";
import { z } from "zod";

export const exampleRouter = t.router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),
});
