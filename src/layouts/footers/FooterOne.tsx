import Link from "next/link";
import React from "react";

export default function FooterOne() {
  return (
    <>
      <footer className="footer-section overflow-hidden position-relative footer-style1">
        <div className="footer-widgets-wrapper footer-widget-wrapperv01">
          <div className="container">
            <div className="row g-md-4 g-4 justify-content-between">
              <div
                className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/" className="footer-logo">
                      <img
                        src="assets/img/logo/logo-light.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      Découvrez la qualité et la fraîcheur des produits laitiers
                      de Candia Algérie. <br />
                      Notre engagement : des produits sains et innovants pour
                      votre santé.
                    </p>
                    <div className="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-facebook"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-instagram"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-youtube"></i>
                      </a>
                      <a href="#" className="white-clr">
                        <i className="white-clr fa-brands fa-tiktok"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Nos Produits</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-glass-water"></i>
                        Lait UHT
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-bowl-food"></i>
                        Yaourts Nature
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-bottle-water"></i>
                        Crème Fraîche
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-cheese"></i>
                        Fromages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Liens utiles</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">À propos</Link>
                    </li>
                    <li>
                      <Link href="/service">Nos Services</Link>
                    </li>
                    <li>
                      <Link href="/faq">Foire aux Questions</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog & Actualités</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Contactez-nous</h3>
                  </div>
                  <ul className="list-area list-contact">
                    <li>
                      <a href="mailto:contact@candia-dz.com">
                        <i className="fa-solid fa-envelope-open-text"></i>
                        contact@candia-dz.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+21312345678" className="link">
                        <i className="fa-solid fa-phone-volume"></i>
                        +213 123 456 78
                      </a>
                    </li>
                    <li>
                      <a href="https://goo.gl/maps/xyz" className="link">
                        <i className="fa-solid fa-map-location-dot"></i>
                        123 Rue de l'Industrie, Alger, Algérie
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © Candia Algérie {new Date().getFullYear()}. Tous droits
                réservés.
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/terms">Conditions Générales</Link>
                </li>
                <li>
                  <Link href="/privacy">Politique de Confidentialité</Link>
                </li>
                <li>
                  <Link href="/contact">Contactez-nous</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src="assets/img/footer/footer-wheat.png"
          alt="img"
          className="footer-wheat position-absolute"
        />
      </footer>
    </>
  );
}
