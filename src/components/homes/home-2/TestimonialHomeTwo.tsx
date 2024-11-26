"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialHomeTwo() {
  return (
    <>
      <section className="testimonial-section stylev02 overflow-hidden space-top p100-bg">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-common-wrapper testimonial-wrapperv02 position-relative mb-40">
                <div className="section-title mb-50">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Témoignage
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Une croissance solide grâce à des produits laitiers de
                    qualité
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
                    nextEl: ".cmn-next1",
                    prevEl: ".cmn-prev1",
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper testimonial-slidewrap01"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="d-flex justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Ahmed Boudiaf</h3>
                            <span>Responsable Production Laitière</span>
                          </div>
                        </div>
                        <img
                          src="assets/img/icon/quote-leftp2.svg"
                          alt="icon"
                          className="qute"
                        />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Candia Algérie s'engage à produire des produits laitiers
                        de haute qualité, respectueux des normes les plus
                        strictes. Grâce à des processus de production avancés et
                        un contrôle rigoureux, nous garantissons une qualité
                        constante pour satisfaire les besoins de nos
                        consommateurs.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="d-flex justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Sofia Khelifi</h3>
                            <span>Directrice Qualité</span>
                          </div>
                        </div>
                        <img
                          src="assets/img/icon/quote-leftp2.svg"
                          alt="icon"
                          className="qute"
                        />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        La qualité est au cœur de tout ce que nous faisons. De
                        la collecte du lait à sa transformation, nous veillons à
                        ce que chaque produit respecte nos standards de qualité
                        et de sécurité, garantissant ainsi la satisfaction de
                        nos clients.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="d-flex justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Rachid Belkacem</h3>
                            <span>Responsable Développement Durable</span>
                          </div>
                        </div>
                        <img
                          src="assets/img/icon/quote-leftp2.svg"
                          alt="icon"
                          className="qute"
                        />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Chez Candia Algérie, nous nous engageons à respecter
                        l'environnement en intégrant des pratiques durables dans
                        notre processus de production. Nous nous efforçons de
                        préserver les ressources naturelles tout en offrant des
                        produits laitiers de qualité supérieure.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="d-flex justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>Nadia Amrane</h3>
                            <span>Responsable R&D</span>
                          </div>
                        </div>
                        <img
                          src="assets/img/icon/quote-leftp2.svg"
                          alt="icon"
                          className="qute"
                        />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <p>
                        Grâce à l'innovation continue dans la recherche et le
                        développement, Candia Algérie offre une gamme variée de
                        produits laitiers, toujours plus nutritifs et adaptés
                        aux attentes de nos consommateurs.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="text-center">
                <div className="common-slidebtn d-inline-flex align-items-center justify-content-center gap-xl-3 gap-2">
                  <button className="cmn-prev1 cust-swiper2">
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <div className="dot-cmn"></div>
                  <button className="cmn-next1 cust-swiper2 active">
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div
                className="testimonial-thumbv2 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/testimonial/testimonial-thumb2.png"
                  alt="img"
                  className="w-100"
                />
                <div className="testimonial-count">
                  <img src="assets/img/icon/apple-count.png" alt="img" />
                  <div className="cont">
                    <h3>
                      <span className="count">4</span>k+
                    </h3>
                    <p>Clients satisfaits</p>
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
