import type { Metadata } from "next";
import "./globals.css";
import "@/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";

const BASE_URL = "https://www.trixtern.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Trixtern Technologies | Software Development Company in Bhubaneswar, Odisha",
    template: "%s | Trixtern Technologies - Bhubaneswar, Odisha",
  },
  description:
    "Trixtern Technologies is a leading software development company in Bhubaneswar, Odisha offering AI solutions, web development, UI/UX design, cloud infrastructure, and cybersecurity services. Engineering intentionality for ambitious brands.",
  keywords: [
    "software development company Bhubaneswar",
    "web development Odisha",
    "IT company Bhubaneswar",
    "AI solutions Odisha",
    "UI UX design Bhubaneswar",
    "cloud infrastructure Bhubaneswar",
    "software company in Odisha",
    "digital agency Bhubaneswar",
    "Trixtern Technologies",
    "app development Bhubaneswar",
    "cybersecurity Odisha",
    "tech startup Bhubaneswar",
    "full stack development Odisha",
    "best software company Bhubaneswar",
  ],
  authors: [{ name: "Trixtern Technologies", url: BASE_URL }],
  creator: "Trixtern Technologies",
  publisher: "Trixtern Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Trixtern Technologies",
    title: "Trixtern Technologies | Software Development Company in Bhubaneswar, Odisha",
    description:
      "Leading software development company in Bhubaneswar, Odisha. We build AI-powered digital ecosystems, web applications, and cloud solutions with precision and measurable impact.",
    images: [
      {
        url: `${BASE_URL}/logos/trixternnobg.png`,
        width: 512,
        height: 512,
        alt: "Trixtern Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trixtern Technologies | Software Development in Bhubaneswar",
    description:
      "AI solutions, web development, and cloud infrastructure — built in Bhubaneswar, Odisha for the world's most ambitious brands.",
    images: [`${BASE_URL}/logos/trixternnobg.png`],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace after Google Search Console verification
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Geo-targeting meta tags for Bhubaneswar, Odisha */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Bhubaneswar" />
        <meta name="geo.position" content="20.2961;85.8245" />
        <meta name="ICBM" content="20.2961, 85.8245" />

        {/* Language and locale */}
        <meta httpEquiv="content-language" content="en-in" />
      </head>
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
