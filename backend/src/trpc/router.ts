import { z } from "zod";
import { t } from "@/trpc/server";

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((req) => {
    req.input; // string
    return { id: req.input, name: "Bilbo" };
  }),
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (req) => {
      // use your ORM of choice
      return await UserModel.create({
        data: req.input,
      });
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
