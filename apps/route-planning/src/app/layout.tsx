import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@nextjs-microfrontends-example/ui/globals.css";
import { Header } from "@nextjs-microfrontends-example/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Micro frontends example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header
          variant="route-planning"
          user={{
            name: "Daniel Soares",
            avatarUrl: "",
          }}
        />
        <main className="container mt-12">{children}</main>
      </body>
    </html>
  );
}
