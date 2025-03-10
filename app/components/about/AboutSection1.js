import Image from "next/image";
import styles from "./AboutSection1.module.css";

function AboutSection1() {
  return (
    <section className={styles.AboutSection1}>
      <div className="container">
        <div className={styles.AboutSection1Row}>
          <div className={styles.AboutSection1Col}>
            <div className={styles.AboutSection1ColInner}>
              <Image
                className={styles.AboutSection1ColInner1Img}
                src="/about/about.png"
                alt="About"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.AboutSection1ColInner2}>
              <p>ABOUT US</p>
              <h3>
                The church is the people of God within the world being agents of
                hope
              </h3>
              <p>
                Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
                lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat
                at ex accumsan, a feugiat velit sagittis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </p>
              <ul>
                <li>In sit amet augue non dui sodale</li>
                <li>In sit amet augue non dui sodale</li>
                <li>In sit amet augue non dui sodale</li>
                <li>In sit amet augue non dui sodale</li>
              </ul>
            </div>
          </div>
          <div className={styles.AboutSection1Col2}>
            <h3>
              Faith in Every Step, Love<br></br> in Every Action Where Love
              Inspires.
            </h3>
            <p>
              Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
              lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat
              at ex accumsan, a feugiat velit sagittis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>
          <div className={styles.AboutSection1Col3}>
            <div className={styles.asBox}>
              <h4>Vision</h4>
              <p>
                To bring together all American Tamil Physicians and allied
                healthcare professionals.
              </p>
            </div>
            <div className={styles.asBox}>
              <h4>Mission</h4>
              <p>
                To bring together all American Tamil Physicians and allied
                healthcare professionals.
              </p>
            </div>
            <div className={styles.asBox}>
              <h4>Donate</h4>
              <p>
                To bring together all American Tamil Physicians and allied
                healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
