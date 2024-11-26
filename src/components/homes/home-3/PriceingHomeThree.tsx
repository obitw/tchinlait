import React from "react";

export default function PriceingHomeThree() {
  return (
    <>
      <section className="pricing-section overflow-hidden white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  NOS OFFRES
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  L'excellence laitière, au service de votre bien-être
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="pricing-itemsv1">
                <h5>Consultation</h5>
                <div className="price d-flex">
                  <h2>9€</h2>
                  <span>/mois</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Conseils pour
                    une meilleure gestion laitière
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Optimisation de
                    votre production laitière
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-xmark"></i>Produits non
                    adaptés à votre région
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-xmark"></i>Solutions
                    génériques sans valeur ajoutée
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Obtenez maintenant
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="pricing-itemsv1 active">
                <h5>Parfait</h5>
                <div className="price d-flex">
                  <h2>29€</h2>
                  <span>/mois</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Solutions sur
                    mesure pour votre production laitière
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Suivi de la
                    qualité des produits laitiers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Formation et
                    sensibilisation à l'agriculture durable
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Assistance
                    technique 24/7
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Obtenez maintenant
                </a>
                <span className="price-badge">Populaire</span>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="pricing-itemsv1">
                <h5>Facile</h5>
                <div className="price d-flex">
                  <h2>19€</h2>
                  <span>/mois</span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Accès à des
                    informations clés pour améliorer la production
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Conseils
                    personnalisés en fonction des produits laitiers
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Suivi de la
                    production de lait
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Réduction des
                    coûts de production
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Obtenez maintenant
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/pricing-animal.png"
          alt="img"
          className="pricing-element"
        />
      </section>
    </>
  );
}
