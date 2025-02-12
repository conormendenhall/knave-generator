import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknut = Inknut_Antiqua({
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "knave generator",
  description: "randomize all things for your knave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inknut.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
