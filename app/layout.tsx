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
      <Script src="https://cdn.jsdelivr.net/gh/haohaaorg/shanormyanmar@master/dist/som.min.js" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} font-mont bg-light dark:bg-dark w-full min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
