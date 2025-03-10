/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./AutoSlider.module.css";
import Link from "next/link";

const AutoSlider = () => {
  // Define the array of images
  const images = [
    "/footSlider/1.jpg",
    "/footSlider/2.jpg",
    "/footSlider/3.jpg",
    "/footSlider/4.jpg",
    "/footSlider/5.jpg",
    "/footSlider/6.jpg",
    "/footSlider/7.jpg",
    "/footSlider/8.jpg",
    "/footSlider/9.jpg",
  ];

  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null); // Using useRef to store the interval

  // Set up automatic scrolling
  useEffect(() => {
    scrollIntervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2000); // Adjust the interval for smoothness

    return () => clearInterval(scrollIntervalRef.current); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={styles.slider} ref={sliderRef}>
      {images.map((src, index) => (
        <div key={index} className={styles.slide}>
          <img src={src} alt={`Slide ${index + 1}`} />
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaIcon}
          >
            <FaInstagram />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AutoSlider;
