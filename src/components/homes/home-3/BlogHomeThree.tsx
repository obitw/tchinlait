import Link from "next/link";
import React from "react";

export default function BlogHomeThree() {
  return (
    <>
      <section className="blog-section overflow-hidden blog-stylev1 white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  NOTRE BLOG
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Cultiver un avenir durable grâce à l'industrie laitière
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
                        <i className="fa-regular fa-user"></i> Par l'équipe
                        Candia
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    De la Ferme à la Table : L'importance de l'agriculture
                    laitière
                  </Link>
                  <p>
                    L'agriculture laitière joue un rôle clé dans la production
                    de produits sains et de qualité pour les consommateurs.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    Lire la suite <i className="fa-solid fa-arrow-right"></i>
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
                        <i className="fa-regular fa-user"></i> Par l'équipe
                        Candia
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    Le lait frais de la ferme à votre table
                  </Link>
                  <p>
                    Découvrez comment Candia Algérie garantit la fraîcheur et la
                    qualité de ses produits laitiers, du producteur au
                    consommateur.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    Lire la suite <i className="fa-solid fa-arrow-right"></i>
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
                        <i className="fa-regular fa-user"></i> Par l'équipe
                        Candia
                      </a>
                    </li>
                  </ul>
                  <Link href="/blog-details" className="title">
                    Découvrir le potentiel de l'agriculture laitière
                  </Link>
                  <p>
                    L'agriculture laitière durable est essentielle pour assurer
                    une production responsable et de qualité.
                  </p>
                  <Link href="/blog-details" className="arrows">
                    Lire la suite <i className="fa-solid fa-arrow-right"></i>
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
