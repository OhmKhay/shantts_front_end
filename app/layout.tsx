import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "./Providers";
import * as gtag from "../lib/gtag.js";
import Head from "next/head";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shan Text To Speech",
  description: "A Shan Text To Speech Quick Playground ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const router: any = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      {/* https://haohaa.sgp1.digitaloceanspaces.com/post_images/tts-shan-bg-png-ukb80-20230530 */}
      <Script src="https://cdn.jsdelivr.net/gh/haohaaorg/shanormyanmar@master/dist/som.min.js" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        name="description"
        content={"A Shan Text To Speech Quick Playground"}
      />
      <meta name="keywords" content="HaoHaa, Science, TTS, Shan" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
      />

      <meta property="og:title" content={"Shan Text To Speech - HaoHaa"} />
      <meta property="og:site_name" content="HaoHaa" />
      <meta property="og:type" content={"website"} />
      <meta
        property="og:url"
        content={"https://shantts-playground.haohaa.com/"}
      />
      <meta
        property="og:image"
        content={
          "https://haohaa.sgp1.digitaloceanspaces.com/post_images/shn-tts-bg-png-efz8e-20230530"
        }
      />
      <meta property="og:image:alt" content={"Shan Text to Speech - HaoHaa"} />
      <meta
        property="og:description"
        content={"A Shan Text To Speech Quick Playground"}
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body
        className={`${inter.className} font-mont bg-light dark:bg-dark w-full min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
