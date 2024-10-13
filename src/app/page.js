  "use client"
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import Loader from './Loader';
import Navbar from "./composants/Navbar";
import Footer from "./composants/Footer";
import Header from "./composants/Header";
  export default function Home() {
    const [text, setText] = useState("");
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
      // Fetch data from the API
      fetch("/api/test")
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.log(error));
  
      // Set a timer to fade out the loader after 5 seconds
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="flex flex-col min-h-screen bg-[#f0f8ff]">
        
        <Navbar />
        <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4d90c7]">Découvrez la fraîcheur Candia</h1>
          <p className="text-[#6c7a89] mt-4 text-lg">
            Nos produits laitiers sont fabriqués avec soin pour vous offrir le meilleur de la qualité.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#4d90c7] text-white hover:bg-[#3a7198]">Nos produits</button>
            <button variant="outline" className="text-[#4d90c7] border-[#4d90c7] hover:bg-[#e6f0f9]">
              En savoir plus
            </button>
          </div>
        </div>
        <div>
          <img
            src="img/20ans.png"
            alt="Candia"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </main>
      <section className="bg-[#e6f0f9] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4d90c7] mb-8">Nos produits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img/lait-frais.png"
                alt="Produit 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4d90c7]">Lait frais</h3>
                <p className="text-[#6c7a89] mt-2">
                  Notre lait frais est produit avec soin pour vous offrir le meilleur.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img/jus.jpg"
                alt="Produit 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4d90c7]">Boissons</h3>
                <p className="text-[#6c7a89] mt-2">
                Nos boissons sont préparées avec des ingrédients naturels pour une fraîcheur et un goût authentiques.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="img/twist.png"
                alt="Produit 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4d90c7]">Twist</h3>
                <p className="text-[#6c7a89] mt-2">
                Boissons aromatisées spécialement conçues pour les enfants, pour un moment de plaisir et de fraîcheur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4d90c7] mb-8">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#e6f0f9] rounded-lg p-8">
              <LeafIcon className="h-12 w-12 text-[#4d90c7]" />
              <h3 className="text-xl font-semibold text-[#4d90c7] mt-4">Durabilité</h3>
              <p className="text-[#6c7a89] mt-2">
                Nous nous engageons à produire de manière durable pour préserver l&apos;environnement.
              </p>
            </div>
            <div className="bg-[#e6f0f9] rounded-lg p-8">
              <TruckIcon className="h-12 w-12 text-[#4d90c7]" />
              <h3 className="text-xl font-semibold text-[#4d90c7] mt-4">Fraîcheur</h3>
              <p className="text-[#6c7a89] mt-2">
                Nos produits sont livrés rapidement pour vous garantir la meilleure fraîcheur.
              </p>
            </div>
            <div className="bg-[#e6f0f9] rounded-lg p-8">
              <ShieldIcon className="h-12 w-12 text-[#4d90c7]" />
              <h3 className="text-xl font-semibold text-[#4d90c7] mt-4">Qualité</h3>
              <p className="text-[#6c7a89] mt-2">
                Nos produits sont fabriqués avec le plus grand soin pour vous offrir la meilleure qualité.
              </p>
            </div>
            <div className="bg-[#e6f0f9] rounded-lg p-8">
              <UsersIcon className="h-12 w-12 text-[#4d90c7]" />
              <h3 className="text-xl font-semibold text-[#4d90c7] mt-4">Proximité</h3>
              <p className="text-[#6c7a89] mt-2">
                Nous sommes à l&apos;écoute de nos clients pour mieux répondre à leurs attentes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {showLoader && (
        <div className="absolute inset-0 z-50">
          <Loader />
        </div>
      )}
    </div>
  )

}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}



function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}