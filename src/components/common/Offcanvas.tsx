import MobileMenu from "@/layouts/headers/menu/MobileMenu";
import Link from "next/link";
import React from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Offcanvas({ open, setOpen }: Props) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo" style={{ maxWidth: '150px' }}>
                  <Link href="/">
                    <img 
                      src="assets/img/logo/logo.png" 
                      alt="logo-img" 
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '60px',
                        objectFit: 'contain'
                      }}
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container d-xl-none">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4>Informations de contact</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        10 Rue de l'Industrie, Zone Industrielle, Alger, Algérie
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:contact@candiaalgerie.com">
                        contact@candiaalgerie.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Lun-Ven, 08h - 17h
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+213560000000">+213 56 00 00 00</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4 mb-4">
                  <Link href="/contact" className="cmn-btn">
                    Nous contacter
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <h4>Réseaux sociaux</h4>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${open ? "overlay-open" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}
