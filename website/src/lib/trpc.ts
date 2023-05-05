import type { AppRouter } from "@fungi/api";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

const productionServer = "https://api.fungi.clubhouse.mlntcandy.com";
// const productionServer = "http://localhost:3000";

const trpcOptions = {
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${productionServer}/trpc`,
      // // optional
      // headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
};

export const trpc = createTRPCProxyClient<AppRouter>(trpcOptions);
