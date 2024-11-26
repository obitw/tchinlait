import Link from "next/link";
import React from "react";

export default function AboutHomeTwo() {
  return (
    <>
      <section className="about-section style-v01 space-top pb-60 mb-3 white-bg">
        <div className="container">
          <div className="row g-4 align-items-lg-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div
                className="about-thumv02 position-relative w-100 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <img
                  src="assets/img/about/choose-thumb2.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Pourquoi Choisir Candia Algérie
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    La passion de l'agriculture au service de l'alimentation
                  </h2>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Chez Candia Algérie, nous mettons un point d'honneur à
                    produire des produits laitiers de la plus haute qualité,
                    issus d'une agriculture durable et respectueuse de
                    l'environnement. Nos produits sont le fruit d'un
                    savoir-faire unique, cultivé avec passion et expertise pour
                    nourrir les générations actuelles et futures.
                  </p>
                  <ul className="about-list2">
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Une
                      production laitière de qualité, respectueuse des normes
                      strictes de sécurité alimentaire.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Des valeurs
                      fortes d'intégrité, de transparence et de responsabilité
                      envers nos producteurs locaux.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i> Un engagement
                      constant envers l'innovation pour offrir des produits
                      laitiers modernes et adaptés aux besoins des
                      consommateurs.
                    </li>
                  </ul>
                  <Link href="/about" className="cmn-btn primary-border">
                    En savoir plus
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
