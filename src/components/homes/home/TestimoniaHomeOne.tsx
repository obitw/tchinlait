"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimoniaHomeOne() {
  return (
    <>
      <section className="testimonial-section testimonial-style1 section-padding">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-4 col-md-4">
              <div
                className="testimonial-thumbv1 w-100 wow fadeInDown"
                data-wow-delay=".4s"
              >
                <img
                  src="assets/img/testimonial/testimonial.png"
                  alt="img"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
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
                  className="swiper testimonial-slidewrap01"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="ratting d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Candia Algérie offre des produits laitiers de qualité,
                        fabriqués selon les plus hautes normes, pour une
                        nutrition saine et équilibrée.
                      </p>
                      <div className="review-man d-flex align-items-center">
                        <img 
                          src="assets/img/testimonial/re1.jpg" 
                          alt="img" 
                          className="rounded-circle me-3"
                          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                        />
                        <div className="cont">
                          <h3>Fawzi Berkati</h3>
                          <span>Proptiétaire</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="ratting d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Nous sommes fiers de produire des produits laitiers
                        locaux qui respectent les traditions tout en innovant
                        pour le bien-être des consommateurs.
                      </p>
                      <div className="review-man d-flex align-items-center">
                        <img 
                          src="assets/img/testimonial/re2.jpg" 
                          alt="img" 
                          className="rounded-circle me-3"
                          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                        />
                        <div className="cont">
                          <h3>Nesrine Berkati</h3>
                          <span>Communication and Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="ratting d-flex align-items-center justify-content-between">
                        <img src="assets/img/icon/quote-left.svg" alt="icon" />
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Candia Algérie transforme le lait en produits délicieux
                        et de qualité, tout en respectant l'environnement et en
                        garantissant la sécurité alimentaire.
                      </p>
                      <div className="review-man d-flex align-items-center">
                        <img 
                          src="assets/img/testimonial/re3.png" 
                          alt="img" 
                          className="rounded-circle me-3"
                          style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                        />
                        <div className="cont">
                          <h3>Tejdin Berkati</h3>
                          <span>PDG</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="dot-cmn"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
