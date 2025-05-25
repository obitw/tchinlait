import Blog from "@/components/blog";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Candia Algérie - Blog",
  description:
    "Restez informé des dernières actualités de Candia Algérie. Découvrez nos articles sur les produits laitiers, la nutrition et nos engagements qualité.",
};

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
}
