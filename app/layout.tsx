import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shan Text To Speech",
  description: "Shan Text To Speech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* https://haohaa.sgp1.digitaloceanspaces.com/post_images/tts-shan-bg-png-ukb80-20230530 */}
      <Script src="https://cdn.jsdelivr.net/gh/haohaaorg/shanormyanmar@master/dist/som.min.js" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="description" content={"Shan Text To Speech"} />
      <meta name="keywords" content="HaoHaa, Science, TTS, Shan" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
      />

      <meta property="og:title" content={"Shan Text To Speech"} />
      <meta property="og:site_name" content="HaoHaa" />
      <meta property="og:type" content={"website"} />
      <meta property="og:url" content={"https://haohaa.com"} />
      <meta
        property="og:image"
        content={
          "https://haohaa.sgp1.digitaloceanspaces.com/post_images/shn-tts-bg-png-efz8e-20230530"
        }
      />
      <meta property="og:image:alt" content={"Shan Text to Speech"} />
      <meta property="og:description" content={"Shan Text To Speech"} />

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
