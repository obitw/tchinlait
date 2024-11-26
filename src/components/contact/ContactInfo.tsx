import React from "react";

export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Adresse</h5>
                  <a href="#" className="pra">
                    10 Rue de l'Industrie, Zone Industrielle, Alger <br />{" "}
                    Algérie
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Appelez-nous</h5>
                  <a href="#" className="pra">
                    Numéro : +213 56 00 00 00 <br />
                    Fax : +213 21 00 00 01
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">Envoyez-nous un e-mail</h5>
                  <a href="#" className="pra">
                    contact@candiaalgerie.com <br />
                    support@candiaalgerie.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
