import Link from "next/link";
import React from "react";

export default function WorkProcessHomeTwo() {
  return (
    <>
      <section className="Working-section section-padding p900-bg">
        <div className="container">
          <div className="working-common-head">
            <div className="section-title">
              <h5
                className="p1-clr wow fadeInLeft text-uppercase"
                data-wow-delay="0.4s"
              >
                Processus de Production
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Garantir la qualité <br /> des produits laitiers Candia
              </h2>
            </div>
            <p className="working-pra wow fadeInLeft" data-wow-delay=".3s">
              Chez Candia Algérie, nous nous engageons à produire des produits
              laitiers de la plus haute qualité. Nous suivons un processus
              rigoureux pour garantir des produits sains, nutritifs et
              savoureux, tout en respectant l'environnement et le bien-être des
              animaux.
            </p>
          </div>
          <div className="row g-xl-4 g-3 justify-content-center position-relative mb-60">
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Préparer <br /> la Ferme
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">01</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".5s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Nourrir les <br /> Animaux
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">02</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".7s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Collecter le <br /> Lait
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">03</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 wow fadeInDown"
              data-wow-delay=".8s"
            >
              <div className="working-proces-items01">
                <h3 className="white-clr">
                  Transformer le <br /> Lait
                </h3>
                <img
                  src="assets/img/element/step-shape.png"
                  alt="img"
                  className="step-working"
                />
                <span className="step-text">04</span>
              </div>
            </div>

            <img
              src="assets/img/element/arro-round-top.png"
              alt="img"
              className="working-arrows-one"
            />
            <img
              src="assets/img/element/arro-round-bottom.png"
              alt="img"
              className="working-arrows-two d-lg-block d-none"
            />
            <img
              src="assets/img/element/arro-round-bottom.png"
              alt="img"
              className="working-arrows-three d-lg-block d-none"
            />
          </div>
          <p className="processs-text">
            Notre processus repose sur des standards de qualité élevés, de la
            ferme à la table.
            <Link href="/contact">
              En savoir plus
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8145 7.27931L12.75 5.21484L8.22656 9.73828C7.44531 10.5195 6.67772 11.0195 5.89844 10.2383C5.11719 9.45703 5.61719 8.69141 6.39844 7.91016L10.9219 3.38672L8.88866 1.35253C8.44528 0.909156 8.82616 0.167969 9.48241 0.167969H14.8144C15.4688 0.167969 16 0.69825 16 1.35253V6.68653C16 7.34081 15.2598 7.72363 14.8145 7.27931ZM2 14.168H12V8.28712L14 10.2871V14.168C14 15.2734 13.1055 16.168 12 16.168H2C0.894531 16.168 0 15.2734 0 14.168V4.16797C0 3.06347 0.894531 2.16797 2 2.16797H5.88088L7.88088 4.16797H2V14.168Z"
                  fill="#2AB939"
                />
              </svg>
            </Link>
          </p>
        </div>

        <img
          src="assets/img/element/sylli.png"
          alt="img"
          className="working-slilli"
        />
        <img
          src="assets/img/element/green-area.png"
          alt="img"
          className="working-green"
        />
      </section>
    </>
  );
}
