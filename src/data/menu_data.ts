import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/header/home-1.jpg";
import demo_img_2 from "@/assets/img/header/home-2.jpg";
import demo_img_3 from "@/assets/img/header/home-3.jpg";

interface DataType {
	id: number;
	title: string;
	link: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
		demo_img?: StaticImageData;
	}[];
}

// menu data
const menu_data: DataType[] = [

	{
		id: 2,
		title: "Candia Algérie",
		link: "/about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Nos Services",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/service", title: "Services" },
			{ link: "/service-details", title: "Services Details" },
		],
	},
	{
		id: 4,
		title: "Produits",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/gallery", title: "Gallery" },
			{ link: "/gallery-details", title: "Gallery Details" },
		],
	},
	{
		id: 5,
		title: "Candia et Vous",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/blog", title: "Blog" },
			{ link: "/blog-details", title: "Blog Details" },
		],
	},


	{
		id: 7,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
