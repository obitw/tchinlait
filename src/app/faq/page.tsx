import Faq from "@/components/faq";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Foire Aux Questions",
  description:
    "Trouvez les réponses à vos questions sur nos produits laitiers Candia. Qualité, conservation, nutrition : nous vous aidons à tout comprendre.",
};

export default function index() {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
}
