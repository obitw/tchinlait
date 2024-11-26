"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialHomeThree() {
  return (
    <>
      <section className="testimonial-section style-section-v03 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-common-wrapper testimonial-wrapperv02 position-relative">
                <div className="section-title mb-50">
                  <h5 className="p2-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Témoignages
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    La fraîcheur de la ferme <br /> pour tous
                  </h2>
                </div>
                <Swiper
                  spaceBetween={2}
                  loop={true}
                  slidesPerView={1}
                  speed={1300}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".cmn-prev2",
                    prevEl: ".cmn-next2",
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper testimonial-slidewrap01 "
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Nadia Benali</h3>
                            <span>Directrice Qualité</span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Chez Candia Algérie, nous mettons un point d'honneur à
                        offrir des produits laitiers d'une qualité
                        irréprochable. Grâce à nos méthodes de production
                        modernes et respectueuses de l'environnement, nous
                        garantissons des produits frais, savoureux et nutritifs,
                        pour le bien-être de nos consommateurs.
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Mohamed Taïbi</h3>
                            <span>Agriculteur Partenaire</span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        En tant que partenaire de Candia Algérie, je suis fier
                        de fournir du lait de haute qualité, directement de
                        notre ferme à vos produits. Leur engagement envers
                        l'excellence et la durabilité me motive à contribuer à
                        cette belle aventure.
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Yasmine Chouikh</h3>
                            <span>Responsable Production</span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        La production chez Candia Algérie est un processus
                        rigoureux où chaque étape est contrôlée pour garantir
                        une qualité optimale. Nous avons à cœur de respecter les
                        normes les plus strictes pour offrir des produits
                        laitiers sains et délicieux à nos clients.
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Abdelkader Djebli</h3>
                            <span>Responsable Distribution</span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Grâce à un réseau de distribution étendu, les produits
                        laitiers Candia Algérie arrivent rapidement et dans les
                        meilleures conditions aux consommateurs. La fraîcheur et
                        la qualité sont nos priorités à chaque étape de la
                        chaîne.
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="testimonial-thumbv3 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/testimonial/testimonial-thumbv3.png"
                  alt="img"
                  className="w-100 mimg"
                />
                <div className="testimonial-count">
                  <img src="assets/img/icon/apple-count.png" alt="img" />
                  <div className="cont">
                    <h3>
                      <span className="count">15</span>+ Ans
                    </h3>
                    <p>De Clients Satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
