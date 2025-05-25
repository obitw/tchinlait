import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Détails de nos Services",
  description:
    "Découvrez en détail nos services et notre engagement envers la qualité des produits laitiers. Candia Algérie vous garantit excellence et fraîcheur.",
};

export default function index() {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
}
