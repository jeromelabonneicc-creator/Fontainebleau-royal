import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fontainebleau Royal — ICC Fontainebleau",
  description: "Participe au financement de la future salle d'ICC Fontainebleau."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
