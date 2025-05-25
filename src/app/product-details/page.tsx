import ProductDetails from "@/components/product-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Détails des Produits",
  description:
    "Découvrez en détail notre gamme de produits laitiers Candia. Qualité, fraîcheur et goût sont au rendez-vous dans chacun de nos produits.",
};

export default function index() {
  return (
    <Wrapper>
      <ProductDetails />
    </Wrapper>
  );
}
