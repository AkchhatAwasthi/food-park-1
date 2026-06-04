import { Metadata } from "next";
import BrandsClient from "@/components/BrandsClient";

export function generateMetadata(): Metadata {
  return {
    title: "Our Brands — Foodpark | 10 Multi-Cuisine Cloud Kitchen Concepts",
    description:
      "Explore Foodpark's 10 diverse food brands — from Mughlai to South Indian, Chinese to Chai — each crafted for India's varied food lovers.",
    alternates: {
      canonical: "https://www.foodparkindia.com/brands",
    },
    openGraph: {
      title: "Our Brands — Foodpark | 10 Multi-Cuisine Cloud Kitchen Concepts",
      description:
        "Explore Foodpark's 10 diverse food brands — from Mughlai to South Indian, Chinese to Chai — each crafted for India's varied food lovers.",
      url: "https://www.foodparkindia.com/brands",
    },
  };
}

export default function BrandsPage() {
  return <BrandsClient />;
}
