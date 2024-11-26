"use client";
import Link from "next/link";
import React from "react";

export default function BlogArea() {
  return (
    <>
      <section className="blog-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="blog-details-big pe-xl-2">
                <div
                  className="blog-details-leftitem wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big01.jpg" alt="img" />
                    <span className="date-badge">22 jan</span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments"></i>{" "}
                          Commentaires (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user"></i> Par admin
                        </a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Le lait : Source de bien-être
                    </Link>
                    <p>
                      Le lait est un aliment essentiel à notre santé. Il fournit
                      des nutriments indispensables tels que le calcium, les
                      protéines et les vitamines. Découvrez comment intégrer les
                      produits laitiers dans votre alimentation pour une vie
                      plus saine.
                    </p>
                    <Link
                      href="/blog-details"
                      className="cmn-btn primary-border"
                    >
                      Lire la suite
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-details-leftitem wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big02.jpg" alt="img" />
                    <span className="date-badge">22 jan</span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments"></i>{" "}
                          Commentaires (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user"></i> Par admin
                        </a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      L'importance du lait dans notre quotidien
                    </Link>
                    <p>
                      Le lait est un aliment riche qui participe à la
                      construction et au maintien de nos os. Dans cet article,
                      nous explorons ses bienfaits et comment l'intégrer dans
                      votre alimentation quotidienne.
                    </p>
                    <Link
                      href="/blog-details"
                      className="cmn-btn primary-border"
                    >
                      Lire la suite
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-details-leftitem wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big03.jpg" alt="img" />
                    <span className="date-badge">22 jan</span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments"></i>{" "}
                          Commentaires (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user"></i> Par admin
                        </a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Les bienfaits du yaourt pour la santé
                    </Link>
                    <p>
                      Le yaourt est une excellente source de probiotiques qui
                      favorisent la santé digestive. Découvrez comment intégrer
                      ce produit laitier dans votre alimentation pour un
                      meilleur bien-être intestinal.
                    </p>
                    <Link
                      href="/blog-details"
                      className="cmn-btn primary-border"
                    >
                      Lire la suite
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-details-leftitem wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big04.jpg" alt="img" />
                    <span className="date-badge">22 jan</span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments"></i>{" "}
                          Commentaires (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user"></i> Par admin
                        </a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Du lait frais directement à votre table
                    </Link>
                    <p>
                      Découvrez comment Candia Algérie vous fournit du lait
                      frais et des produits laitiers de qualité supérieure,
                      directement depuis nos fermes jusqu'à votre table. Nous
                      garantissons des produits de qualité pour toute la
                      famille.
                    </p>
                    <Link
                      href="/blog-details"
                      className="cmn-btn primary-border"
                    >
                      Lire la suite
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-details-leftitem wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="thumb position-relative">
                    <img src="assets/img/blog/blog-big05.jpg" alt="img" />
                    <span className="date-badge">22 jan</span>
                  </div>
                  <div className="content">
                    <ul className="comment-inner">
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-comments"></i>{" "}
                          Commentaires (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-regular fa-user"></i> Par admin
                        </a>
                      </li>
                    </ul>
                    <Link href="/blog-details" className="titles">
                      Innover avec des produits laitiers de qualité
                    </Link>
                    <p>
                      Découvrez comment Candia Algérie innove constamment pour
                      offrir des produits laitiers qui répondent aux besoins
                      nutritionnels de chacun. Notre engagement : offrir des
                      produits de qualité supérieure à chaque consommateur.
                    </p>
                    <Link
                      href="/blog-details"
                      className="cmn-btn primary-border"
                    >
                      Lire la suite
                      <i className="fa-solid fa-arrow-right p1-clr"></i>
                    </Link>
                  </div>
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
                    <h3>Rechercher</h3>
                  </div>
                  <div
                    className="search-widget"
                    data-aos="zoom-in"
                    data-aos-duration="1400"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Rechercher ici..." />
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
                    <h3>Catégories</h3>
                  </div>
                  <div
                    className="category"
                    data-aos="fade-down"
                    data-aos-duration="1600"
                  >
                    <ul className="d-grid gap-xxl-3 gap-3">
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Produits Laitiers
                          Naturels
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Lait Frais
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details">
                          <i className="fa-solid fa-minus"></i>Yaourts et
                          Fromages
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
                    <h3>Derniers Articles</h3>
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
                        <Link href="/blog-details">
                          Le lait : Source de bien-être
                        </Link>
                        <span>22 janvier 2024</span>
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
                        <Link href="/blog-details">
                          L'importance du lait dans notre quotidien
                        </Link>
                        <span>22 janvier 2024</span>
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
                        <Link href="/blog-details">
                          Les bienfaits du yaourt pour la santé
                        </Link>
                        <span>22 janvier 2024</span>
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
                    <h3>Tags populaires</h3>
                  </div>
                  <div
                    className="tags"
                    data-aos="fade-down"
                    data-aos-duration="1600"
                  >
                    <ul>
                      <li>
                        <Link href="/blog-details">Lait</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Produits Laitiers</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Yaourt</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Bien-être</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Calcium</Link>
                      </li>
                      <li>
                        <Link href="/blog-details">Nutrition</Link>
                      </li>
                    </ul>
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
