import Image from "next/image";
import styles from "./AtmaChapterSection3.module.css";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection3() {
  return (
    <section className={styles.AtmaChapterSection2}>
      <div className="container">
        <div className={styles.AtmaChapterSection2Row}>
          <div className={styles.AtmaChapterSection2Col2}>
            <Image
              className={styles.AtmaChapterSection2Img}
              src="/atmac/3.png"
              alt="AtmaChapterSection2"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.AtmaChapterSection2Col}>
            <p>OUR VISIONS</p>
            <h3>
              Industry has been present for over 20 years here in the City.
            </h3>
            <p>
              Mauris molestie leo vel odio interdum pharetra. Vivamus vitae
              euismod sapien, quis tempor nulla. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras in
              mauris ac neque auctor varius id in neque. Mauris scelerisque
            </p>
            <div className={styles.checkBoxAtmac}>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
              <p>
                <FaCheckCircle /> <span>Fermentum magna id tortor.</span>
              </p>
            </div>
            <Link href="/">
              <Button
                text="View More"
                bgColor="var(--secondary)"
                color="var(--color-black)"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtmaChapterSection3;
