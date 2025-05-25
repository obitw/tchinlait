import HomeThree from "@/components/homes/home-3";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Accueil Style 3",
  description:
    "Une nouvelle perspective sur Candia Algérie. Découvrez notre engagement envers la qualité des produits laitiers à travers une présentation innovante.",
};

export default function index() {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
}
