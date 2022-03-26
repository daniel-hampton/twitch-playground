import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../init-firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning className={"h-full"}>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
}
export default MyApp;
