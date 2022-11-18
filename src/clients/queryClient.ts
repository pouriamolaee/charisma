import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default queryClient;
