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
                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/" className="footer-logo">
                      <img
                        src="assets/img/logo/logo.png"
                        alt="logo-candia"
                        style={{ maxHeight: '200px', width: 'auto' }}
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
                      <a href="https://www.facebook.com/Candia.Algerie/" className="white-clr">
                        <i className="white-clr fa-brands fa-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/candia_dz/" className="white-clr">
                        <i className="white-clr fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/@tchinlaitcandia8597" className="white-clr">
                        <i className="white-clr fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-5 col-md-6 col-sm-12 wow fadeInUp"
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
                          SPA Tchin-Lait
                          RN n°12 - Bir Slam, BEJAIA 06000
                          ALGERIE
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
