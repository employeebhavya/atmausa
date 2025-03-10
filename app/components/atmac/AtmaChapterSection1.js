import Image from "next/image";
import styles from "./AtmaChapterSection1.module.css";
import Button from "../Button";
import Link from "next/link";

function AtmaChapterSection1() {
  return (
    <section className={styles.AtmaChapterSection1}>
      <div className="container">
        <div className={styles.AtmaChapterSection1Row}>
          <div className={styles.AtmaChapterSection1Col}>
            <Image src="/atmac/1.png" alt="Chapter" width={600} height={600} />
          </div>
          <div className={styles.AtmaChapterSection1Col2}>
            <p>OUR MISSIONS</p>
            <h3>
              Industry has been present for over 20 years here in the City.
            </h3>
            <p>
              Mauris molestie leo vel odio interdum pharetra. Vivamus vitae
              euismod sapien, quis tempor nulla. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras in
              mauris ac neque auctor varius id in neque. Mauris scelerisque arcu
              vulputate, elementum purus eget,
            </p>
            <div className={styles.iconBoxAtmac}>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/1.svg" alt="icon" width={50} height={50} />
                <h4>Vision/Mission</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/2.svg" alt="icon" width={50} height={50} />
                <h4>Our Growth</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/3.svg" alt="icon" width={50} height={50} />
                <h4>Charitable Activity</h4>
              </div>
              <div className={styles.iconAtmac}>
                <Image src="/atmac/4.svg" alt="icon" width={50} height={50} />
                <h4>National and International</h4>
              </div>
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

export default AtmaChapterSection1;
