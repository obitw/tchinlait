import ProductList from "@/components/product-list";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Notre Gamme de Produits Laitiers",
  description:
    "Explorez notre gamme complète de produits laitiers Candia : lait frais, yaourts, fromages et bien plus encore. Des produits de qualité pour toute la famille.",
};

export default function index() {
  return (
    <Wrapper>
      <ProductList />
    </Wrapper>
  );
}
