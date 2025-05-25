import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie Services - Nos Engagements Qualité",
  description:
    "Découvrez nos services et notre engagement envers la qualité des produits laitiers. Candia Algérie met son expertise au service de votre satisfaction.",
};

export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
}
