import { Metadata } from "next";
import FranchiseClient from "@/components/FranchiseClient";

export function generateMetadata(): Metadata {
  return {
    title:
      "Partnership Opportunity — Foodpark FICO Model | Invest ₹3.5L, Earn Up to 370%",
    description:
      "Own a Foodpark cloud kitchen with just ₹3,50,000. Zero operations, fixed returns up to ₹15,000/month or revenue share of ₹27,000/month. Apply now.",
    alternates: {
      canonical: "https://www.foodparkindia.com/franchise",
    },
    openGraph: {
      title:
        "Partnership Opportunity — Foodpark FICO Model | Invest ₹3.5L, Earn Up to 370%",
      description:
        "Own a Foodpark cloud kitchen with just ₹3,50,000. Zero operations, fixed returns up to ₹15,000/month or revenue share of ₹27,000/month. Apply now.",
      url: "https://www.foodparkindia.com/franchise",
    },
  };
}

export default function FranchisePage() {
  return <FranchiseClient />;
}
