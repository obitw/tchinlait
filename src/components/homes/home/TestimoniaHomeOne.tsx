"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAssetPath } from "@/utils/pathUtils";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Candia Algérie offre des produits laitiers de qualité, fabriqués selon les plus hautes normes, pour une nutrition saine et équilibrée.",
    author: "Fawzi Berkati",
    role: "Propriétaire",
    image: "/assets/img/testimonial/re1.jpg"
  },
  {
    id: 2,
    content: "Nous sommes fiers de produire des produits laitiers locaux qui respectent les traditions tout en innovant pour le bien-être des consommateurs.",
    author: "Nesrine Berkati",
    role: "Communication et Marketing Manager",
    image: "/assets/img/testimonial/re2.jpg"
  },
  {
    id: 3,
    content: "Candia Algérie transforme le lait en produits délicieux et de qualité, tout en respectant l'environnement et en garantissant la sécurité alimentaire.",
    author: "Tejdin Berkati",
    role: "PDG",
    image: "/assets/img/testimonial/re3.png"
  }
];

export default function TestimoniaHomeOne() {
  return (
    <section className="testimonial-section testimonial-style1 section-padding">
      <div className="container">
        <div className="row g-6 align-items-center">
          <div className="col-lg-4 col-md-4">
            <div 
              className="testimonial-thumbv1 w-100 wow fadeInDown" 
              data-wow-delay=".4s"
            >
              <img
                src={getAssetPath("/assets/img/testimonial/testimonial.png")}
                alt="Témoignages clients"
                className="img-fluid"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="testimonial-common-wrapper position-relative ps-xxl-5 ps-lg-4">
              <Swiper
                spaceBetween={20}
                loop={true}
                slidesPerView={1}
                speed={1300}
                autoplay={{
                  delay: 5000,
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
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="swiper-slide">
                    <div className="testimonail-common-items">
                      <div className="ratting d-flex align-items-center justify-content-between">
                        <img
                          src={getAssetPath("/assets/img/icon/quote-left.svg")}
                          alt="quote"
                          className="img-fluid"
                          aria-hidden="true"
                        />
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                      </div>
                      <p>{testimonial.content}</p>
                      <div className="review-man d-flex align-items-center">
                        <img
                          src={getAssetPath(testimonial.image.startsWith('/') ? testimonial.image.substring(1) : testimonial.image)}
                          alt={testimonial.author}
                          className="img-fluid rounded-circle me-3"
                          style={{ 
                            width: '70px', 
                            height: '70px', 
                            objectFit: 'cover' 
                          }}
                        />
                        <div className="cont">
                          <h3>{testimonial.author}</h3>
                          <span>{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="dot-cmn"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
