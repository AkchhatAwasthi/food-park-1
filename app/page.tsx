import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export function generateMetadata(): Metadata {
  return {
    title: "Foodpark — Multi-Brand Cloud Kitchen Franchise | Lucknow, India",
    description:
      "Own a food business without running it. Foodpark's FICO model lets you invest ₹3.5L and earn up to 370% returns in 4 years. Cloud kitchen franchise across India.",
    alternates: {
      canonical: "https://www.foodparkindia.com",
    },
    openGraph: {
      title: "Foodpark — Multi-Brand Cloud Kitchen Franchise | Lucknow, India",
      description:
        "Own a food business without running it. Foodpark's FICO model lets you invest ₹3.5L and earn up to 370% returns in 4 years. Cloud kitchen franchise across India.",
      url: "https://www.foodparkindia.com",
    },
  };
}

export default function Home() {
  return <HomeClient />;
}
