import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Providers } from "../components/Providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={urbanist.className}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
