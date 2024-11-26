import Link from "next/link";
import React from "react";

export default function GalleryArea() {
  return (
    <>
      <section className="gallery-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg1.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Produits Laitiers</span>
                  <Link href="/gallery-details" className="title">
                    Lait Frais : Le Goût de la Fraîcheur
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg2.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Fromage</span>
                  <Link href="/gallery-details" className="title">
                    Fromage Artisanale : Savoir-Faire et Goût
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg3.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Yaourt</span>
                  <Link href="/gallery-details" className="title">
                    Yaourt Nature : Douceur et Équilibre
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg4.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Crème</span>
                  <Link href="/gallery-details" className="title">
                    Crème Fraîche : Richesse et Douceur
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg5.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Lait UHT</span>
                  <Link href="/gallery-details" className="title">
                    Lait UHT : Fraîcheur au Quotidien
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="gallery-static-item">
                <img
                  src="assets/img/gallery/mg6.jpg"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="content">
                  <span className="category">Produits Laitiers</span>
                  <Link href="/gallery-details" className="title">
                    Crème de Lait : Authenticité et Saveur
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
