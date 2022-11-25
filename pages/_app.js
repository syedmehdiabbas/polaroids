import "../styles/globals.css";
import Layout from "../components/layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
