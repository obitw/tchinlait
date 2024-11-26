"use client";
import React from "react";

export default function SubscribeHomeTwo() {
  return (
    <>
      <div className="subscrbie-section">
        <div className="container">
          <div className="subscribe-wrapper-v02">
            <div className="container">
              <div className="row g-4 align-items-center justify-content-between">
                <div className="col-lg-6 col-md-5">
                  <div className="subs-contentv2">
                    <h5>Abonnez-vous à notre newsletter</h5>
                    <h2>
                      <span>Abonnez-vous</span> pour recevoir toutes les
                      informations sur nos produits laitiers
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-7">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="subscribe-form02 flex-sm-nowrap flex-wrap"
                  >
                    <input type="text" placeholder="Entrez votre e-mail" />
                    <button className="cmn-btn cmn-white p900-clr round100 text-capitalize">
                      S'abonner
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <img
              src="assets/img/footer/subscribe-shapev2.png"
              alt="img"
              className="subscribe-shapev2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
