"use client";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React from "react";

export default function CtaHomeOne() {
  // const selectHandler = (e: any) => { };
  const selectHandler = (e: unknown) => {};

  return (
    <>
      <section className="who-section overflow-hidden p900-bg section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="section-title mb-40">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Qui sommes-nous
                </h5>
                <h2
                  className="wow fadeInDown white-clr mb-24"
                  data-wow-delay=".3s"
                >
                  Nourrir le monde avec des produits laitiers de qualité
                </h2>
                <p className="white-clr wow fadeInDown" data-wow-delay=".4s">
                  Candia Algérie s'engage à offrir des produits laitiers frais,
                  sains et issus d'une agriculture durable, pour contribuer à la
                  santé de nos consommateurs.
                </p>
              </div>
              <div className="row g-xl-6 g-4">
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/hand-planp900.svg" alt="icon" />
                    </div>
                    <Link href="/about" className="title">
                      Produits laitiers frais
                      <br /> et nutritifs
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/wheath-p900.svg" alt="icon" />
                    </div>
                    <Link href="/about" className="title">
                      Respect de la terre
                      <br /> et de l'environnement
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-contact-wrap">
                <h3 className="white-clr">Laissez-nous un message</h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="row g-xl-4 g-3"
                >
                  <div className="col-lg-6">
                    <input type="text" placeholder="Nom" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-6">
                    <input type="number" placeholder="Votre numéro" />
                  </div>
                  <div className="col-lg-6">
                    <NiceSelect
                      options={[
                        { value: "00", text: "Votre région" },
                        { value: "01", text: "Alger" },
                        { value: "02", text: "Oran" },
                        { value: "04", text: "Constantine" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      placeholder="Sélectionnez une option"
                      name="myNiceSelect"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="cmn-btn cmn-primary2 text-capitalize"
                    >
                      Envoyer maintenant
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <img
          src="assets/img/element/who-element.png"
          alt="img"
          className="who-element"
        />
      </section>
    </>
  );
}
