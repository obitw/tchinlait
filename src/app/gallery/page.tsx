import Gallery from "@/components/gallery";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Galerie Photos",
  description:
    "Découvrez en images nos installations modernes et notre gamme de produits laitiers Candia. La qualité se voit dans chaque détail.",
};

export default function index() {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
}
