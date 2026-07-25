import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Hasina Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}