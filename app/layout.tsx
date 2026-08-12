import "./globals.css";
import type { Metadata } from "next";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: "Fontainebleau Royal — ICC Fontainebleau",
  description: "Participe au financement de la future salle d'ICC Fontainebleau.",
  openGraph: {
    title: "Fontainebleau Royal — ICC Fontainebleau",
    description: "Participe au financement de la future salle d'ICC Fontainebleau.",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontainebleau Royal — ICC Fontainebleau",
    description: "Participe au financement de la future salle d'ICC Fontainebleau."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
