import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export function generateMetadata(): Metadata {
  return {
    title: "Foodpark — Best Cloud Kitchen in Lucknow | Multi-Brand Franchise",
    description:
      "Foodpark is the best cloud kitchen in Lucknow — a multi-brand delivery network running 10 distinct food concepts from one optimized kitchen. Invest in a cloud kitchen franchise in Lucknow with guaranteed returns and zero operational hassle.",
    alternates: {
      canonical: "https://www.foodparkindia.com",
    },
    openGraph: {
      title: "Foodpark — Best Cloud Kitchen in Lucknow | Multi-Brand Franchise",
      description:
        "Foodpark is the best cloud kitchen in Lucknow — a multi-brand delivery network running 10 distinct food concepts from one optimized kitchen. Invest in a cloud kitchen franchise in Lucknow with guaranteed returns and zero operational hassle.",
      url: "https://www.foodparkindia.com",
    },
  };
}

export default function Home() {
  return <HomeClient />;
}
