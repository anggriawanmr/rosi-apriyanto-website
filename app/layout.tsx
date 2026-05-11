import type { Metadata } from "next";
import { LanguageProvider } from "./providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosi Apriyanto | Architect & Construction Consultant",
  description:
    "Professional architect consultant for pier construction, roads, housing construction, project management, and site supervision.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
