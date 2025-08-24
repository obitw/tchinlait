import portfolio_img_1 from "@/assets/img/gallery/feature1.jpg";
import portfolio_img_2 from "@/assets/img/gallery/feature2.jpg";
import portfolio_img_3 from "@/assets/img/gallery/feature3.jpg";
import portfolio_img_4 from "@/assets/img/gallery/feature4.jpg";
import portfolio_img_5 from "@/assets/img/gallery/feature5.jpg";
import portfolio_img_6 from "@/assets/img/gallery/feature6.jpg";

import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  title: string;
  image: StaticImageData;
  category: string;
  description: string;
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    title: "Lait frais",
    image: portfolio_img_1,
    category: "Produits laitiers",
    description:
      "Lait frais de qualité, directement issu de nos fermes partenaires.",
  },
  {
    id: 2,
    title: "Yaourt à boire",
    image: portfolio_img_2,
    category: "Produits laitiers",
    description:
        "Une boisson lactée onctueuse et savoureuse, idéale pour une pause gourmande."
  },
  {
    id: 3,
    title: "Twist",
    image: portfolio_img_3,
    category: "Produits laitiers",
    description:
        "Une boisson fruitée et rafraîchissante, parfaite pour tous les âges."
  },
  {
    id: 4,
    title: "Candy Fruity",
    image: portfolio_img_4,
    category: "Produits laitiers",
    description:
      "Découvrez les nouveaux délices de Candy Fruity à base de Jus de Pomme qui éveilleront vos sens à chaque gorgée !",
  },
  {
    id: 5,
    title: "Boisson Orange",
    image: portfolio_img_5,
    category: "Produits laitiers",
    description:
      "L'orange dans toute sa fraîcheur, avec notre boisson Candia.",
  },
  {
    id: 6,
    title: "Nectar de Grenade",
    image: portfolio_img_6,
    category: "Produits laitiers",
    description:
      "Un moment de pure douceur avec chaque gorgée de notre nectar de grenade.️",
  }
];

export default portfolio_data;
