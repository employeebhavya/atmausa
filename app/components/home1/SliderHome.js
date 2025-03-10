"use client";

import { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import styles from "./SliderHome.module.css";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

function SliderHome() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);

  return (
    <section className={styles.sliderHome}>
      <div className="container">
        <div className={styles.slider}>
          <div className={styles.slide}>
            <h1>Welcome To American Tamil Medical Association</h1>
            <p>
              ATMA is as an organization formed to promote charitable work
              through their foundation (ATMA-CF) nationally and internationally
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/contact">
                <Button
                  text="Join Now"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                  hoverBgColor="var(--primary)"
                  hoverTextColor="var(--color-white)"
                />
              </Link>
              <button onClick={handleVideoOpen} className={styles.playButton}>
                <Image
                  src="/pageHeader/play.svg"
                  width={50}
                  height={50}
                  alt="Play Video"
                />{" "}
                <p style={{ marginLeft: "10px" }}>Play Video</p>
              </button>
            </div>
          </div>
          <Image
            className={styles.sliderMobile}
            src="/pageHeader/home-mobile.png"
            alt="Slider"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div className={styles.videoPopup}>
          <div className={styles.videoContent}>
            <button onClick={handleVideoClose} className={styles.closeButton}>
              <AiFillCloseSquare
                size={30}
                style={{ color: "var(--secondary)" }}
              />
            </button>
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="/hero.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SliderHome;
