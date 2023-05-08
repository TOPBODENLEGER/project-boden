import "@/styles/globals.css";
import { MediaContextProvider } from "../media";

export default function App({ Component, pageProps }) {
  return (
    <MediaContextProvider>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
}
