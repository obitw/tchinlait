import React from "react";
import { Metadata } from "next";
import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Candia Algérie - Accueil Style 2",
  description:
    "Découvrez Candia Algérie sous un autre angle. Notre engagement pour des produits laitiers de qualité se reflète dans chaque aspect de notre présentation.",
};

export default function index() {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
}
