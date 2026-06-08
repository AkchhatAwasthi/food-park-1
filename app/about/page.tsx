import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export function generateMetadata(): Metadata {
  return {
    title: "About Us — Foodpark | Lucknow's Best Cloud Kitchen Franchise Company",
    description:
      "Discover the story behind Foodpark — Lucknow's leading cloud kitchen franchise company. Learn how the FICO model is redefining food entrepreneurship across India, one kitchen at a time.",
    alternates: {
      canonical: "https://www.foodparkindia.com/about",
    },
    openGraph: {
      title: "About Us — Foodpark | Lucknow's Best Cloud Kitchen Franchise Company",
      description:
        "Discover the story behind Foodpark — Lucknow's leading cloud kitchen franchise company. Learn how the FICO model is redefining food entrepreneurship across India, one kitchen at a time.",
      url: "https://www.foodparkindia.com/about",
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}
