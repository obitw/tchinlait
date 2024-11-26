"use client";
import React, { useState } from "react";

const accordioa_data = [
  {
    id: 1,
    title: "Lait Frais de Qualité",
    description:
      "Nous proposons du lait frais de haute qualité, collecté directement auprès des producteurs locaux, pour garantir un produit naturel et nutritif à chaque consommation.",
  },
  {
    id: 2,
    title: "Yaourts et Fromages",
    description:
      "Découvrez notre large gamme de yaourts et de fromages, fabriqués selon des recettes traditionnelles et modernes pour offrir une texture onctueuse et un goût délicieux.",
  },
  {
    id: 3,
    title: "Produits Laitiers Enrichis",
    description:
      "Nous offrons des produits laitiers enrichis, incluant des yaourts probiotiques et des fromages à faible teneur en matières grasses, pour répondre à vos besoins nutritionnels.",
  },
  {
    id: 4,
    title: "Engagement pour la Qualité",
    description:
      "Chaque étape de notre processus de production respecte des normes strictes de qualité et de sécurité alimentaire, afin de vous garantir des produits sains et savoureux.",
  },
  {
    id: 5,
    title: "Service Client Disponible",
    description:
      "Notre équipe de service client est là pour répondre à vos questions concernant nos produits, la disponibilité et les points de vente. Contactez-nous pour toute information.",
  },
];

export default function ServiceDetailsArea() {
  const [isOpen, setIsOpen] = useState(0);

  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  };

  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4">
              <div className="service-details-left">
                <div
                  className="tab-faq faq mb-40 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    {accordioa_data.map((item, i) => (
                      <div
                        key={i}
                        className={`accordion-single ${
                          isOpen === i ? "active" : ""
                        }`}
                      >
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button"
                          >
                            {item.title}
                          </button>
                        </h5>
                        <div
                          className="content-area"
                          style={{ display: isOpen === i ? "block" : "none" }}
                        >
                          <div className="content-body">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="service-bambo-box wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3 className="text-uppercase">CONTACTEZ-NOUS</h3>
                  <span className="fast">Pour un service rapide</span>
                  <a href="tel:+213123456765" className="call">
                    <span className="call-icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    (+213) 123 456 765
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img
                    src="assets/img/service/service-single2.jpg"
                    alt="image"
                  />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>La Qualité de Nos Produits Laitiers</h3>
                  <p>
                    Nos produits laitiers sont fabriqués avec soin pour offrir
                    des produits délicieux, frais et sains à toute la famille.
                    Nous mettons un point d'honneur à respecter les normes de
                    qualité les plus strictes à chaque étape de production.
                  </p>
                </div>
                <div className="working-process-details">
                  <div
                    className="working-proces-items01 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h3 className="white-clr">
                      Lait Frais <br /> de Qualité
                    </h3>
                    <div className="details-iconbox d-center">
                      <img
                        src="assets/img/icon/details-desert.svg"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div
                    className="working-proces-items01 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h3 className="white-clr">
                      Fromages et <br /> Yaourts
                    </h3>
                    <div className="details-iconbox d-center">
                      <img
                        src="assets/img/icon/details-flower.svg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="cont-box mb-40 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h3>Découvrez la richesse de nos produits</h3>
                  <p>
                    Nous nous engageons à vous offrir une expérience gustative
                    unique avec nos produits laitiers, qu'ils soient nature ou
                    enrichis en probiotiques et autres bienfaits nutritionnels.
                  </p>
                </div>
                <div className="service-single-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay=".7s">
                    <img
                      src="assets/img/service/service-details-big.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                    <img
                      src="assets/img/service/service-single1.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
