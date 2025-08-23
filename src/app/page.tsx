import React from "react";
import { Metadata } from "next";
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Tchin-Lait Candia",
  description:
    "Découvrez Candia Algérie, votre partenaire de confiance pour des produits laitiers de qualité. Notre engagement envers l'excellence et la fraîcheur se reflète dans chaque produit, du lait frais aux yaourts onctueux.",
};

export default function index() {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
}
