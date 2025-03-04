import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexamind Tech Challenge",
  description: "Nexamind Tech Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
