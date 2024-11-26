"use client";
import VideoPopup from "@/modals/VideoPopup";
import Link from "next/link";
import React, { useState } from "react";

export default function HeroHomeThree() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section className="banner-section style-v3 overflow-hidden position-relative">
        <div className="container">
          <div className="banner-wrapperv3 position-relative">
            <div className="row">
              <div className="col-lg-7 col-md-9">
                <div className="hero-contentv03">
                  <div className="sun-star wow fadeInDown" data-wow-delay=".3s">
                    <img src="assets/img/icon/icon-sunstar.svg" alt="img" />
                    Excellence laitière
                  </div>
                  <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                    Découvrez le <span>meilleur de l'industrie laitière</span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">
                    Depuis des années, Candia Algérie s'engage à fournir des
                    produits laitiers de qualité supérieure, issus d'une
                    production respectueuse et innovante. Notre savoir-faire est
                    reconnu dans toute l'Algérie.
                  </p>
                  <div className="adjust-video">
                    <Link
                      href="/about"
                      className="cmn-btn wow fadeInUp"
                      data-wow-delay="0.9s"
                    >
                      En savoir plus
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                    <div className="video-area">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-cmn d-center video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                      <h5>Regarder la vidéo</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/img/banner/hero-3.jpg"
          alt="img"
          className="hero-threthumb"
        />
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
