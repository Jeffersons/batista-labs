import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batista Labs",
  description: "Portfolio and experiments by Jefferson Batista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          accentColor="violet"
          grayColor="sand"
          panelBackground="translucent"
          radius="large"
          appearance="dark"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}