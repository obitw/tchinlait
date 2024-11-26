import Link from "next/link";
import React from "react";

export default function HeroHomeTwo() {
  return (
    <>
      <section className="banner-section position-relative style-v2 overflow-hidden">
        <div className="container">
          <div className="banner-wrapperv2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7 col-md-9">
                <div className="banner-contentv02">
                  <h5 className="wow fadeInUp" data-wow-delay="0.2s">
                    L'agriculture de demain
                  </h5>
                  <h1 className="wow fadeInUp" data-wow-delay="0.5s">
                    L'agriculture est notre héritage{" "}
                    <span>
                      et notre avenir <br /> c'est dans nos récoltes
                    </span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    Depuis des décennies, Candia Algérie s'engage à fournir des
                    produits laitiers de qualité supérieure, soutenant
                    l'agriculture locale et répondant aux besoins nutritionnels
                    des consommateurs algériens.
                  </p>
                  <div
                    className="banner-buttonv2 wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <Link
                      href="/about"
                      className="cmn-btn round100 primary-border"
                    >
                      En savoir plus
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                    <a href="#" className="header-help">
                      <span className="icon d-center">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <span className="d-grid">
                        <span className="need">Besoin d'aide ?</span>
                        <span className="call">(808) 555-0111</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/banner/hero-v2.png"
          alt="img"
          className="hero-v02-thumb"
        />
      </section>
    </>
  );
}
