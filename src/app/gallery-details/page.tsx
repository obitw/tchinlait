import GalleryDetails from "@/components/gallery-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Détails de la Galerie",
  description:
    "Explorez en détail nos installations et nos produits laitiers en images. Candia Algérie vous invite à découvrir l'excellence de notre production.",
};

export default function index() {
  return (
    <Wrapper>
      <GalleryDetails />
    </Wrapper>
  );
}
