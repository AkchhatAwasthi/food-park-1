import { Metadata } from "next";
import FranchiseClient from "@/components/FranchiseClient";

export function generateMetadata(): Metadata {
  return {
    title:
      "Franchise Opportunity — Foodpark FICO Model | Cloud Kitchen Franchise in Lucknow",
    description:
      "Own a cloud kitchen franchise in Lucknow with Foodpark's FICO model. Invest ₹3.5L, earn up to 370% in 4 years — no operations, no staff, no hassle. Real returns, real transparency.",
    alternates: {
      canonical: "https://www.foodparkindia.com/franchise",
    },
    openGraph: {
      title:
        "Franchise Opportunity — Foodpark FICO Model | Cloud Kitchen Franchise in Lucknow",
      description:
        "Own a cloud kitchen franchise in Lucknow with Foodpark's FICO model. Invest ₹3.5L, earn up to 370% in 4 years — no operations, no staff, no hassle. Real returns, real transparency.",
      url: "https://www.foodparkindia.com/franchise",
    },
  };
}

export default function FranchisePage() {
  return <FranchiseClient />;
}
