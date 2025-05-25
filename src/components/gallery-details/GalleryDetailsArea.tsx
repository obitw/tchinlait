import React from "react";

export default function GalleryDetailsArea() {
  return (
    <>
      <section className="gallery-detailssection overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center mb-40">
            <div className="col-lg-4">
              <div className="gallery-headright-details">
                <h3>Nos Produits Laitiers</h3>
                <p>
                  Découvrez notre large gamme de produits laitiers, de qualité
                  supérieure, allant du lait frais aux yaourts et fromages.
                  Chaque produit est soigneusement fabriqué pour répondre aux
                  attentes des consommateurs.
                </p>
                <div className="author-details">
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Client
                      <span>:</span>
                    </span>
                    <span className="info">Candia Algérie (Tchinlait)</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Auteur
                      <span>:</span>
                    </span>
                    <span className="info">Équipe Candia Algérie</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Date
                      <span>:</span>
                    </span>
                    <span className="info">2024</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Catégorie
                      <span>:</span>
                    </span>
                    <span className="info">Produits Laitiers</span>
                  </div>
                  <div className="author-item">
                    <span className="aut d-flex align-items-center justify-content-between">
                      Prix
                      <span>:</span>
                    </span>
                    <span className="info">
                      Consultez les prix sur notre site
                    </span>
                  </div>
                </div>
                <div className="social-wrapper d-flex align-items-center">
                  <a href="#" className="white-clr">
                    <i className="white-clr fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="white-clr">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                        fill="white-clr"
                      />
                    </svg>
                  </a>
                  <a href="#" className="white-clr">
                    <i className="white-clr fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="white-clr">
                    <i className="white-clr fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="gallery-headleft-details">
                <img
                  src="assets/img/gallery/gallery-details-thumb1.jpg"
                  alt="img"
                />
                <div className="content">
                  <h3>Découvrez nos produits laitiers</h3>
                  <p>
                    Nous vous proposons des produits laitiers de haute qualité,
                    allant du lait frais à une variété de yaourts et de
                    fromages, conçus pour satisfaire les besoins de tous les
                    consommateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="more-content-gallery">
            <div
              className="thumb w-100 mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <img
                src="assets/img/gallery/gallery-details-thumb12.jpg"
                alt="img"
                className="w-100"
              />
            </div>
            <div className="cont-box1 mb-40 wow fadeInUp" data-wow-delay=".4s">
              <h3>Rehaussez vos repas avec nos produits</h3>
              <p>
                Nos produits laitiers sont parfaits pour enrichir vos repas
                quotidiens. Que ce soit pour le petit-déjeuner, le goûter ou le
                dîner, chaque produit apporte saveur et bienfaits.
              </p>
            </div>
            <div className="cont-box2 mb-40 wow fadeInUp" data-wow-delay=".5s">
              <h3>L'innovation dans chaque produit</h3>
              <p>
                Nous innovons continuellement pour vous offrir des produits
                laitiers enrichis, alliant goût et bienfaits pour la santé, tout
                en répondant aux attentes de nos consommateurs.
              </p>
            </div>
            <div className="other-listing wow fadeInUp" data-wow-delay=".6s">
              <ul>
                <li>
                  <i className="fa-solid fa-glass-water"></i>
                  <h5>Lait frais de qualité</h5>
                </li>
                <li>
                  <i className="fa-solid fa-bowl-food"></i>
                  <h5>Yaourts crémeux et délicieux</h5>
                </li>
                <li>
                  <i className="fa-solid fa-cheese"></i>
                  <h5>Fromages savoureux</h5>
                </li>
                <li>
                  <i className="fa-solid fa-heart-pulse"></i>
                  <h5>Produits enrichis pour votre santé</h5>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="fa-solid fa-users-family"></i>
                  <h5>Des produits pour toute la famille</h5>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                  <h5>Un goût inégalé</h5>
                </li>
                <li>
                  <i className="fa-solid fa-bottle-water"></i>
                  <h5>Le lait comme vous l'aimez</h5>
                </li>
                <li>
                  <i className="fa-solid fa-award"></i>
                  <h5>La qualité à chaque gorgée</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
