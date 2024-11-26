"use client";

import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link";
import React, { useState } from "react";

export default function AboutHomeThree() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="about-section style-v01 white-bg">
        <div className="container">
          <div className="about-wrapperv3">
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
                <div
                  className="about-thumv03 position-relative pe-xl-4 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <img
                    src="assets/img/about/aboutv3.png"
                    alt="img"
                    className="mimg"
                  />
                  <div className="avarage-counting">
                    <div className="avarag">
                      <img src="assets/img/icon/agriculture.svg" alt="img" />
                    </div>
                    <div className="cont">
                      <h5>Activité agricole</h5>
                      <span>
                        Cultiver avec soin pour offrir des produits laitiers de
                        qualité
                      </span>
                    </div>
                  </div>
                  <a
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="play-v3 video-popup"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-contentv1">
                  <div className="section-title mb-40">
                    <h5
                      className="p1-clr text-uppercase wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      Pourquoi choisir Candia Algérie ?
                    </h5>
                    <h2 className="wow fadeInDown" data-wow-delay=".3s">
                      L'agriculture avec passion, l'alimentation avec un but
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Chez Candia Algérie, nous mettons un point d'honneur à
                      offrir des produits laitiers de haute qualité. Nos fermes
                      sont gérées avec soin, en accord avec les meilleures
                      pratiques agricoles pour garantir des produits frais,
                      savoureux et riches en nutriments. Nous croyons que
                      l’agriculture durable est la clé pour nourrir les
                      générations futures de manière responsable et respectueuse
                      de l'environnement.
                    </p>
                    <div className="progress_bar d-grid gap-xxl-4 gap-4">
                      <div className="progress_bar_item">
                        <div className="per-title d-flex align-items-center justify-content-between">
                          <div className="item_label p900-clr">
                            Innovations laitières
                          </div>
                        </div>
                        <div className="item_bar">
                          <div
                            className="progress"
                            data-progress="85"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="progress_bar_item">
                        <div className="per-title d-flex align-items-center justify-content-between">
                          <div className="item_label p900-clr">
                            Solutions durables pour une agriculture respectueuse
                          </div>
                        </div>
                        <div className="item_bar">
                          <div
                            className="progress"
                            data-progress="90"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Link href="/about" className="cmn-btn">
                      En savoir plus
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-hTVNidxg2s"}
      />
      {/* video modal end  */}
    </>
  );
}
