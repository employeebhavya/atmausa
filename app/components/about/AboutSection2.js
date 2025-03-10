import Image from "next/image";
import styles from "./AboutSection2.module.css";

function AboutSection2() {
  return (
    <section className={styles.AboutSection2}>
      <div className="container">
        <div className={styles.AboutSection2Row}>
          <div className={styles.AboutSection2Col}>
            <p>WHAT WE DO IN CHURCH</p>
            <h3>
              The church is the people of God within the world being agents of
              hope
            </h3>
            <div className={styles.numberBox}>
              <h3>01</h3>
              <div>
                <h4>The Start</h4>
                <p>
                  ATMA is committed to forging collaborative alliances with
                  other organizations in efforts that support our mission
                </p>
              </div>
            </div>
            <div className={styles.numberBox}>
              <h3>02</h3>
              <div>
                <h4>Settling</h4>
                <p>
                  To bring together all American Tamil physicians and allied
                  healthcare professionals
                </p>
              </div>
            </div>
            <div className={styles.numberBox}>
              <h3>03</h3>
              <div>
                <h4>Today</h4>
                <p>
                  Provide a forum for ATMA members to enrich their cultural,
                  social, and educational values
                </p>
              </div>
            </div>
          </div>
          <div className={styles.AboutSection2Col2}>
            <Image
              src="/about/about1.png"
              alt="About"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection2;
