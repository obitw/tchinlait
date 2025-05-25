import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Contactez-nous",
  description:
    "Contactez Candia Algérie pour toute question concernant nos produits laitiers. Notre équipe est à votre écoute pour vous offrir le meilleur service.",
};

export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
}
