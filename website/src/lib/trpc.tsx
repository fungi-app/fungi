import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import type { AppRouter } from "@fungi/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import superjson from "superjson";

// const productionServer = "http://localhost:4000";

// const server = productionServer;
// const trpcOptions = {
//   transformer: superjson,
//   links: [
//     httpBatchLink({
//       url: 'http://localhost:4000',
//     }),
//   ],
// }

export const trpc = createTRPCReact<AppRouter>();

export const TRPCProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};


// Я переделываю website на react
// Я поменял версию trpc на 40-ую