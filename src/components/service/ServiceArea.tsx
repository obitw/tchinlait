import Link from "next/link";
import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section className="servicevm-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp1.jpg"
                    alt="Lait frais"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Lait Frais de Qualité
                  </Link>
                  <img src="assets/img/icon/sr1.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp2.jpg"
                    alt="Yaourts et Fromages"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Yaourts et Fromages
                  </Link>
                  <img src="assets/img/icon/sr2.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp3.jpg"
                    alt="Produits Laitiers Enrichis"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Produits Laitiers Enrichis
                  </Link>
                  <img src="assets/img/icon/sr3.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp4.jpg"
                    alt="Lait UHT"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Lait UHT Longue Conservation
                  </Link>
                  <img src="assets/img/icon/sr4.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp5.jpg"
                    alt="Service Client"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Service Client Disponible
                  </Link>
                  <img src="assets/img/icon/sr5.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img
                    src="assets/img/service/srp6.jpg"
                    alt="Engagement pour la qualité"
                    className="w-100 mimg"
                  />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">
                    Engagement pour la Qualité
                  </Link>
                  <img src="assets/img/icon/sr6.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
