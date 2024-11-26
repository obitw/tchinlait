import Link from "next/link";
import React from "react";

export default function ServiceHomeTwo() {
  return (
    <>
      <section className="servicev2-section overflow-hidden white-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5
                  className="p1-clr wow fadeInLeft text-uppercase"
                  data-wow-delay="0.4s"
                >
                  Nos Services
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Garantir la qualité des produits laitiers, de la ferme à la
                  table
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/service1.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="assets/img/icon/desert.svg" alt="svg" />
                  </div>
                  <Link href="/service-details" className="title">
                    Solutions de Croissance Durable
                  </Link>
                  <p>
                    Nous mettons en œuvre des solutions innovantes pour assurer
                    une production laitière durable, respectueuse de
                    l'environnement et des standards de qualité.
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/service2.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="assets/img/icon/fence.svg" alt="svg" />
                  </div>
                  <Link href="/service-details" className="title">
                    Services à la Ferme
                  </Link>
                  <p>
                    Nous accompagnons les producteurs laitiers dans la gestion
                    de leurs élevages, en améliorant les conditions de
                    production pour garantir la meilleure qualité de lait.
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/service3.jpg"
                    alt="img"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <div className="iocns-box d-center">
                    <img src="assets/img/icon/tree.svg" alt="svg" />
                  </div>
                  <Link href="/service-details" className="title">
                    Conseils AgriPro
                  </Link>
                  <p>
                    Grâce à notre expertise en conseil agricole, nous aidons les
                    producteurs laitiers à optimiser leur rendement tout en
                    respectant les normes de qualité et les enjeux
                    environnementaux.
                  </p>
                  <Link href="/service-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-angle-right"></i>
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
