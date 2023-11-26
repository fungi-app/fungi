import {
  createTRPCProxyClient,
  createTRPCReact,
  httpBatchLink,
} from "@trpc/react-query";
import type { AppRouter } from "@fungi/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { tunnel } from "./tunnel";
import superjson from "superjson";

const productionServer = "http://localhost:4000";

const server = tunnel ?? productionServer;
const trpcOptions = {
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${server}/trpc`,
      // // optional
      // headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
};

export const trpc = createTRPCReact<AppRouter>();
export const trpcV = createTRPCProxyClient<AppRouter>(trpcOptions);

export const TRPCProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => trpc.createClient(trpcOptions));

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
