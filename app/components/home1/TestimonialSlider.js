/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    image: "/home/testimonial.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Jessi Martin",
    position: "Manager",
  },
  {
    image: "/home/testimonial1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Mona Martin",
    position: "Manager",
  },
  // Add more testimonials here
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Reset animation after it finishes
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testiRow}>
          <div className={styles.testiCol}>
            <p>TESTIMONIALS</p>
            <h3>Sharing Hope, Spreading Love.</h3>
          </div>
          <div className={styles.slider}>
            <div
              className={`${styles.slide} ${
                isAnimating ? styles.animateSlide : ""
              }`}
              onAnimationEnd={handleAnimationEnd}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className={styles.image}
              />
              <div className={styles.content}>
                <p>{testimonials[currentIndex].text}</p>
                <p style={{ color: "var(--grey)", marginTop: "10px" }}>
                  {testimonials[currentIndex].name} -{" "}
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className={styles.arrow} onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
