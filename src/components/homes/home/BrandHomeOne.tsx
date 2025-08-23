
"use client"
import React from 'react'
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import brand_img_1 from "@/assets/img/sponsor/sp1.png";
import brand_img_2 from "@/assets/img/sponsor/sp2.png";
import brand_img_3 from "@/assets/img/sponsor/sp3.png";
import brand_img_4 from "@/assets/img/sponsor/sp4.png";
import brand_img_5 from "@/assets/img/sponsor/sp5.png";

const brand_data = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
]

interface PropsType {
  style_2?: boolean,
  style_3?: boolean,
}