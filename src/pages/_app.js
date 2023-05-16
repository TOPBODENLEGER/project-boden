import "@/styles/globals.css";
import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { MediaContextProvider } from "../media";
import store from "../state";

export default function App({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </MediaContextProvider>
  );
}
