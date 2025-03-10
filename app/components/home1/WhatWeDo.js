import Image from "next/image";
import styles from "./WhatWeDo.module.css";
import Button from "../Button";
import Link from "next/link";

function WhatWeDo() {
  return (
    <section className={styles.WhatWeDo}>
      <div className="container">
        <div className={styles.wwdRow}>
          <div className={styles.wwdCol1}>
            <p>WHAT WE DO</p>
            <h3>American Tamil Medical Association</h3>
            <div className={styles.wwdIconBox}>
              <div className={styles.wwdIconBoxIcon}>
                <Image
                  src="/home/vision.svg"
                  alt="What We Do"
                  width={75}
                  height={75}
                />
              </div>
              <div className={styles.wwdIconBoxContent}>
                <h4>Vision</h4>
                <p>
                  ATMA is as an organization formed to promote charitable work
                  through their foundation (ATMA-CF) nationally and
                  internationally.
                </p>
              </div>
            </div>
            <div className={styles.wwdIconBox}>
              <div className={styles.wwdIconBoxIcon}>
                <Image
                  src="/home/mission.svg"
                  alt="What We Do"
                  width={75}
                  height={75}
                />
              </div>
              <div className={styles.wwdIconBoxContent}>
                <h4>Mission</h4>
                <p>
                  ATMA is as an organization formed to promote charitable work
                  through their foundation (ATMA-CF) nationally and
                  internationally.
                </p>
              </div>
            </div>
            <div className={styles.wwdIconBox}>
              <div className={styles.wwdIconBoxIcon}>
                <Image
                  src="/home/donate.svg"
                  alt="What We Do"
                  width={75}
                  height={75}
                />
              </div>
              <div className={styles.wwdIconBoxContent}>
                <h4>Donate</h4>
                <p>
                  ATMA is as an organization formed to promote charitable work
                  through their foundation (ATMA-CF) nationally and
                  internationally.
                </p>
              </div>
            </div>
            <Link href="/annual-convention">
              <Button
                text="Know More"
                bgColor="var(--secondary)"
                color="var(--color-black)"
              />
            </Link>
          </div>
          <div className={styles.wwdCol2}>
            <Image
              src="/home/wwd.png"
              alt="What We Do"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
