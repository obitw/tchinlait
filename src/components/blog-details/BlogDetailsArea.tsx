"use client";

import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";
import React from "react";

export default function BlogDetailsArea() {
  // const selectHandler = (e: any) => { };
  const selectHandler = (e: unknown) => {};

  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-post-details">
                <div className="explore-details-content">
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    Explore the beauty of nature
                  </h2>
                  <ul
                    className="comment-inner wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-user-tie"></i> Par l'équipe
                        Candia
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-tags"></i> Catégorie
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-calendar-days"></i> 19 Octobre
                        2024
                      </a>
                    </li>
                  </ul>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the a literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professor at Hampden-a Sydney College Virgini the
                    looked up one of the more obscure
                  </p>
                  <p className="mb-40 wow fadeInUp" data-wow-delay=".5">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical a the a literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professor
                  </p>
                  <div
                    className="thumb w-100 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img
                      src="assets/img/blog/bd1.jpg"
                      alt="img"
                      className="w-100"
                    />
                  </div>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".5s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the a literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professor at Hampden-a Sydney College Virgini the
                    looked up one of the more obscure
                  </p>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".6s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the a literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                  </p>
                  <div
                    className="quote-box mb-40 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <img src="assets/img/icon/quote-leftp2.svg" alt="img" />
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page a when
                      looking at its layout. The point of using Lorem Ipsum is
                      that it has a more-or-less normal distribution of letters
                      as opposed the maon design
                    </p>
                    <h5>Skib Al sakin</h5>
                  </div>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Keep your free time free!
                  </h3>
                  <p className="fist-pra wow fadeInUp" data-wow-delay=".4s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professoContrary to and popular belief Lorem Ipsum
                    is not simply random text It has roots in a piece
                  </p>
                  <div
                    className="blog-single-thumb mb-30 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="thumb w-100">
                      <img
                        src="assets/img/blog/bd-single1.jpg"
                        alt="img"
                        className="w-100"
                      />
                    </div>
                    <div className="thumb w-100">
                      <img
                        src="assets/img/blog/bd-single2.jpg"
                        alt="img"
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="mb-20 wow fadeInUp" data-wow-delay=".3s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                    a Latin professoContrary to and popular belief Lorem Ipsum
                    is not simply random text It has roots in a piece
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                  </p>
                </div>
                <div
                  className="social-tag-wrapper wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="left-tag">
                    <h5>Tags:</h5>
                    <ul className="tag-list">
                      <li>
                        <Link href="/blog-details">Care</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Beauity</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Good</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="social-wrapper d-flex align-items-center">
                    <a href="#" className="white">
                      <i className="white fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="white">
                      <i className="white fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="white">
                      <i className="white fa-brands fa-youtube"></i>
                    </a>
                    <a href="#" className="white">
                      <i className="white fa-brands fa-tiktok"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="component-arrows mt-40 mb-40 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="arrow-item">
                    <Link href="/blog-details" className="arrows">
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <h5>
                      More Care <br /> places
                    </h5>
                  </div>
                  <span className="cusline"></span>
                  <div className="arrow-item">
                    <h5 className="text-end">
                      Mastering <br /> the Art
                    </h5>
                    <a href="#" className="arrows active">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="replay-single-box wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img
                    src="assets/img/blog/reply-kishan.png"
                    alt="img"
                    className="krishana"
                  />
                  <div className="content">
                    <div className="man-info-area mb-20">
                      <div className="man-info">
                        <h3>Kristin Watson</h3>
                        <span>December 23,2024 at 8:50 P.M</span>
                      </div>
                      <button className="replys" type="button">
                        Reply
                      </button>
                    </div>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000
                    </p>
                  </div>
                </div>
                <div
                  className="who-contact-wrap mt-60 mb-60 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <h3 className="mb-40 text-capitalize">Leave A Reply</h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="row g-xl-4 g-3"
                  >
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="col-lg-6">
                      <input type="number" placeholder="Your Number" />
                    </div>
                    <div className="col-lg-6">
                      <NiceSelect
                        options={[
                          { value: "00", text: "Your Area" },
                          { value: "01", text: "Us" },
                          { value: "02", text: "Uk" },
                          { value: "04", text: "Turky" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        placeholder="Select an option"
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
                      <button type="submit" className="cmn-btn">
                        Sent Now
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="maybe-liking wow fadeInUp" data-wow-delay=".8s">
                  <h3 className="mb-40">You May Also Like</h3>
                  <div className="thumb mb-30">
                    <img src="assets/img/blog/bd2.jpg" alt="img" />
                  </div>
                  <h3 className="p900-clr mb-20">
                    Transform your outdoor space into a botanical
                  </h3>
                  <p>
                    Contrary to popular belief Lorem Ipsum is not simply random
                    text It has roots in a piece of classical the literature
                    from 45 BC making it over 2000 years old. Richard McClintock
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-bar mt-lg-0 mt-4">
                <div
                  className="box common-style-box wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div
                    className="wid-title wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <h3>Search</h3>
                  </div>
                  <div
                    className="search-widget"
                    data-aos="zoom-in"
                    data-aos-duration="1400"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search here..." />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="box common-style-box wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div
                    className="wid-title wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <h3>Search</h3>
                  </div>
                  <div
                    className="category"
                    data-aos="fade-down"
                    data-aos-duration="1600"
                  >
                    <ul className="d-grid gap-xxl-3 gap-3">
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-glass-water"></i>Qualité du
                          Lait
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-bowl-food"></i>Produits
                          Frais
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-lightbulb"></i>Innovation
                          Laitière
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-heart-pulse"></i>Nutrition &
                          Santé
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-utensils"></i>Recettes
                          Candia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="box common-style-box wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div
                    className="wid-title wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <h3>Latest Blogs</h3>
                  </div>
                  <div className="recent-postwrap">
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img
                          src="assets/img/blog/details-small1.png"
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan
                          10,2024
                        </span>
                        <Link href="/blog-details">
                          L'Innovation dans les Produits Laitiers
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img
                          src="assets/img/blog/details-small2.png"
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan
                          10,2024
                        </span>
                        <Link href="/blog-details">
                          La Qualité au Cœur de nos Produits
                        </Link>
                      </div>
                    </div>
                    <div className="recent-items">
                      <div className="recent-thumb">
                        <img
                          src="assets/img/blog/details-small13.png"
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-calendar-days"></i> Jan
                          10,2024
                        </span>
                        <Link href="/blog-details">
                          Le Bien-être par les Produits Laitiers
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="box common-style-box wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div
                    className="wid-title wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <h3>Tags</h3>
                  </div>
                  <div className="tagwrap">
                    <Link href="/blog-details">Lait</Link>
                    <Link href="/blog-details">Yaourt</Link>
                    <Link href="/blog-details">Fromage</Link>
                    <Link href="/blog-details">Nutrition</Link>
                    <Link href="/blog-details">Qualité</Link>
                    <Link href="/blog-details">Santé</Link>
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
