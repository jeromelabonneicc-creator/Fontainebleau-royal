import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: "Fontainebleau Royal — ICC Fontainebleau",
  description: "Ensemble, participons aux travaux d’aménagement et de finition de la future salle d’ICC Fontainebleau.",
  openGraph: {
    title: "Fontainebleau Royal — ICC Fontainebleau",
    description: "Ensemble, participons aux travaux d’aménagement et de finition de la future salle d’ICC Fontainebleau.",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontainebleau Royal — ICC Fontainebleau",
    description: "Ensemble, participons aux travaux d’aménagement et de finition de la future salle d’ICC Fontainebleau."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y4r221hvip");`}
        </Script>
      </body>
    </html>
  );
}
