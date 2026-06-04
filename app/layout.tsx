import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FranchiseModal from "@/components/FranchiseModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollIndicator from "@/components/ScrollIndicator";

// Load fonts with CSS custom properties
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C1C1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foodparkindia.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Foodpark",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foodpark — Multi-Brand Cloud Kitchen Franchise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodpark — Multi-Brand Cloud Kitchen Franchise",
    description: "Own a food business without running it. Foodpark's FICO model lets you invest ₹3.5L and earn up to 370% returns in 4 years.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Foodpark",
    "url": "https://www.foodparkindia.com",
    "logo": "https://www.foodparkindia.com/logo.png",
    "description": "Premium multi-brand cloud kitchen franchise from Lucknow, India. Invest under FICO model.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-522-3350876",
      "contactType": "franchise inquiry",
      "areaServed": "IN",
      "availableLanguage": "en",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN",
    },
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${caveat.variable}`}
    >
      <body className="antialiased min-h-screen bg-richblack text-gray font-dmsans">
        <ModalProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ScrollIndicator />
          <Navbar />
          <main className="relative min-h-[calc(100vh-140px)] overflow-hidden">
            {children}
          </main>
          <Footer />
          <FranchiseModal />
          <WhatsAppButton />
        </ModalProvider>
      </body>
    </html>
  );
}
