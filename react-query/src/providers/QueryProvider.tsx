import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({children}: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
