import Link from "next/link";
import React from "react";

type Props = {
  style_2?: boolean;
};

export default function ServiceHomeOne({ style_2 }: Props) {
  return (
    <>
      {/* service-section white-bg */}
      <section
        className={`service-section white-bg ${style_2 ? "" : "space-top"}`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Nos Derniers Services
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Offrir la qualité laitière à chaque moment
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/count1.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="/service-details" className="title">
                    Produits Laitiers Premium
                  </Link>
                  <p>
                    Découvrez nos produits laitiers d'une qualité exceptionnelle
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/wheat-sesh.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="/service-details" className="title">
                    Innovation Laitière
                  </Link>
                  <p>
                    Nous réinventons le goût du lait avec des innovations
                    uniques
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-itemsv1">
                <img
                  src="assets/img/icon/smart-flower.svg"
                  alt="svg"
                  className="icons"
                />
                <div className="content">
                  <Link href="/service-details" className="title">
                    Lait Frais & Naturel
                  </Link>
                  <p>
                    Le lait frais, naturellement délicieux et riche en bienfaits
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
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
