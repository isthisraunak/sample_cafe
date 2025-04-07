import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { playfair, montserrat } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "ÉLYSÉE - Fine Dining Restaurant",
  description: "A sophisticated fine dining restaurant offering modern French cuisine in an elegant atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
