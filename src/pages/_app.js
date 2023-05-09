import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MediaContextProvider } from "../media";

export default function App({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MediaContextProvider>
  );
}
