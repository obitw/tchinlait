import Link from "next/link";
import React from "react";

export default function BlogHomeOne() {
  return (
    <>
      <section className="blog-section overflow-hidden blog-stylev1 white-bg space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  NOS ARTICLES
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Un avenir durable avec des produits laitiers de qualité
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="assets/img/blog/blog1.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Commentaires
                        (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> Par admin
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    Du lait pur : de la ferme à votre table
                  </Link>
                  <p>
                    Découvrez comment Candia Algérie garantit des produits
                    laitiers frais et nutritifs.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="assets/img/blog/blog2.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Commentaires
                        (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> Par admin
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    Les bienfaits du lait pour une vie saine
                  </Link>
                  <p>
                    Le lait est essentiel pour une alimentation équilibrée et
                    une santé optimale.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-11 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="blog-itemsv1">
                <div className="thumb w-100">
                  <img
                    src="assets/img/blog/blog3.jpg"
                    alt="img"
                    className="w-100"
                  />
                  <div className="dates">22 jan</div>
                </div>
                <div className="content">
                  <ul className="comment-inner">
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-comments"></i> Commentaires
                        (05)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-regular fa-user"></i> Par admin
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    L'importance des produits laitiers locaux
                  </Link>
                  <p>
                    Supportons l'économie locale en consommant des produits
                    laitiers algériens.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    En savoir plus <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/carrort-elemet-line.png"
          alt="img"
          className="carrot-left"
        />
        <img
          src="assets/img/element/carrot-element-cricle.png"
          alt="img"
          className="carrot-right d-md-block d-none"
        />
      </section>
    </>
  );
}
