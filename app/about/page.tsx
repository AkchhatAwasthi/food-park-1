import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export function generateMetadata(): Metadata {
  return {
    title: "About Us — Foodpark | Cloud Kitchen Operations & FICO Model",
    description:
      "Explore Foodpark's delivery-first cloud kitchen operations hub in Lucknow and FICO partnership models. Zero daily operations, passive payouts.",
    alternates: {
      canonical: "https://www.foodparkindia.com/about",
    },
    openGraph: {
      title: "About Us — Foodpark | Cloud Kitchen Operations & FICO Model",
      description:
        "Explore Foodpark's delivery-first cloud kitchen operations hub in Lucknow and FICO partnership models. Zero daily operations, passive payouts.",
      url: "https://www.foodparkindia.com/about",
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
