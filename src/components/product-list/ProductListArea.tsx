"use client";
import portfolio_data from "@/data/portfolio_data";
import InputRange from "@/ui/InputRange";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// data
const categories = [
  "Tous",
  ...new Set(portfolio_data.map((item) => item.category)),
];

export default function ProductListArea() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "Tous") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  // handle price
  const all_data = portfolio_data;
  const maxPrice = all_data.reduce((max, item) => {
    return item.price > max ? item.price : max;
  }, 0);
  const [priceValue, setPriceValue] = useState([0, maxPrice]);

  const handleChanges = (val: number[]) => {
    setPriceValue(val);
  };

  return (
    <>
      <section className="product-list-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-3">
              <div className="product-list-leftbar">
                <h5 className="title">Filtrer par prix</h5>
                <div className="pricing-range-area">
                  <div className="wrapper">
                    <div className="price-input" onChange={() => handleChanges}>
                      <div className="field">
                        <input
                          type="number"
                          className="input-min"
                          value={priceValue[0]}
                        />
                      </div>
                      <div className="separator">-</div>
                      <div className="field">
                        <input
                          type="number"
                          className="input-max"
                          value={priceValue[1]}
                        />
                      </div>
                    </div>

                    <InputRange
                      MAX={maxPrice}
                      MIN={0}
                      STEP={1}
                      values={priceValue}
                      handleChanges={handleChanges}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24 mt-3">
                  <span className="total-price">Prix $30 - $1500</span>
                  <button className="filter-btns" type="button">
                    Appliquer
                  </button>
                </div>
                <div className="product-cate">
                  <h5 className="product-title">Catégories</h5>
                  <ul className="product-list">
                    <li>
                      <Link href="/product-details">
                        <span className="name">Lait</span>01
                      </Link>
                    </li>
                    <li>
                      <Link href="/product-details">
                        <span className="name">Yaourt</span>02
                      </Link>
                    </li>
                    <li>
                      <Link href="/product-details">
                        <span className="name">Fromage</span>03
                      </Link>
                    </li>
                    <li>
                      <Link href="/product-details">
                        <span className="name">Crème</span>04
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="show-filter">
                  Affichage de 1 à 16 sur 47 résultats
                </span>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="filter-mixtup">
                <div className="mixtup-filtering d-flex justify-content-center mb-60">
                  <div className="filter-btns">
                    {categories.map((cate, i) => (
                      <React.Fragment key={i}>
                        <button
                          onClick={() => filterItems(cate)}
                          className={`${
                            cate === activeCategory
                              ? "mixitup-control-active"
                              : ""
                          }`}
                        >
                          {cate}
                        </button>{" "}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="all-catagorys">
                  {items.map((item, i) => (
                    <div key={i} className="mix category-a" data-order="1">
                      <div className="feature-itemsv1">
                        <Image src={item.image} alt="img" className="f-thumb" />
                        <div className="content">
                          <Link href="/product-details" className="title">
                            {item.title}
                          </Link>
                          <p>{item.description}</p>
                          <h5>$ {item.price}</h5>
                          <Link href="/product-details" className="add-tocart">
                            Ajouter au panier
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
