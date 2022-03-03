import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <NextNProgress />
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
