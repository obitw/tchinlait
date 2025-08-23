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

// menu data - vide car nous utilisons uniquement le bouton de contact à droite
const menu_data: DataType[] = [
];
export default menu_data;
