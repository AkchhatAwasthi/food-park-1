import { Metadata } from "next";
import BrandsClient from "@/components/BrandsClient";

export function generateMetadata(): Metadata {
  return {
    title: "Our Brands — Foodpark | 10 Unique Cloud Kitchen Food Concepts in Lucknow",
    description:
      "Explore 10 unique food brands under the Foodpark cloud kitchen network — Mughlai, Chinese, Biryani, South Indian, Street Food, Chai, and more. The best multi-brand cloud kitchen in Lucknow.",
    alternates: {
      canonical: "https://www.foodparkindia.com/brands",
    },
    openGraph: {
      title: "Our Brands — Foodpark | 10 Unique Cloud Kitchen Food Concepts in Lucknow",
      description:
        "Explore 10 unique food brands under the Foodpark cloud kitchen network — Mughlai, Chinese, Biryani, South Indian, Street Food, Chai, and more. The best multi-brand cloud kitchen in Lucknow.",
      url: "https://www.foodparkindia.com/brands",
    },
  };
}

export default function BrandsPage() {
  return <BrandsClient />;
}
