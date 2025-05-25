import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Détails du Blog",
  description:
    "Plongez dans nos articles détaillés sur les produits laitiers Candia, la nutrition et notre engagement pour la qualité. Des informations approfondies pour mieux comprendre nos produits.",
};

export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
}
