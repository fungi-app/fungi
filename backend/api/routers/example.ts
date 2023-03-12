import { publicProcedure, t } from "../trpc/server";
import { z } from "zod";

// мы создаем роутер, который потом подсоединяем в ../trpc/router.ts:5
export const exampleRouter = t.router({
  // задаем процедуру "hello"
  hello: publicProcedure // берем за основу "publicProcedure", что является базовой (без предварительных проверок - использовать может любой клиент)
    .input(z.object({ name: z.string() })) // используем zod https://zod.dev/?id=basic-usage, чтобы описать входные данные (валидация за кулисами)
    // задаем функцию процедуры, может быть (а)синхронной, и распаковываем входные данные и контекст
    .query(async ({ input, ctx }) => {
      const shroom = await ctx.db.mushroom.findUnique({ where: { id: 1 } }); // можно выполнить запрос к бд подобным образом
      //    ^^^^^^ <? - ( Mushroom | null )
      if (!shroom) return `Hey, we couldn't find your shroom, ${input.name} :(`;
      // shroom <? - Mushroom
      return `Hello, ${input.name}! The shroom is named ${shroom.name}`; // результат выполнения вернется клиенту
    }),
});
