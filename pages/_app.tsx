import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@src/clients/queryClient";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
