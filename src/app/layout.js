import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Candia Algérie",
  description: "Bienvenue sur le site officiel de Candia Algérie, votre source de produits laitiers de haute qualité. Découvrez notre gamme de produits, nos conseils nutritionnels et bien plus encore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
