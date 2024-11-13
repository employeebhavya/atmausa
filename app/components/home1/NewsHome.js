import Image from "next/image";
import styles from "./NewsHome.module.css";
import Link from "next/link";
import Button from "../Button";

const BoardMemebrs = [
  {
    name: "Building Bridges of Faith, Reaching Hearts with Love.",
    date: "March 21, 2024",
    image: "/home/news/image.png",
  },
  {
    name: "Building Bridges of Faith, Reaching Hearts with Love.",
    date: "March 21, 2024",
    image: "/home/news/image-1.png",
  },
  {
    name: "Building Bridges of Faith, Reaching Hearts with Love.",
    date: "March 21, 2024",
    image: "/home/news/image-2.png",
  },
];

function NewsHome() {
  return (
    <section className={styles.NewsHome}>
      <div className="container">
        <div className={styles.nhRow}>
          <div className={styles.nhCol1}>
            <div className={styles.nhCol1Inner}>
              <p>NEWS AND EVENTS</p>
              <h3>Our latest News</h3>
              <p>
                Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
                lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat
                at ex accumsan, a feugiat velit sagittis. Class aptent taciti.
              </p>
            </div>
          </div>
          <div className={styles.nhCol2}>
            <div className={styles.nhCol2Inner1}>
              <Image
                className={styles.nhImgMain}
                src="/home/news-left.png"
                alt="News"
                width={300}
                height={300}
                style={{ marginBottom: "15px" }}
              />
              <p style={{ color: "var(--grey)" }}>March 21, 2024</p>
              <h4>
                Building Bridges of Faith, Reaching Hearts with Love Where Faith
                Flourishes.
              </h4>
              <p>
                Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
                lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat
                at ex accumsan, a feugiat velit sagittis.
              </p>
            </div>
            <div className={styles.nhCol2Inner2}>
              {BoardMemebrs.map((bm, index) => (
                <div key={index} className={styles.nhCol2Inner2Inner}>
                  <Image
                    className={styles.nhImg}
                    src={bm.image}
                    alt={bm.name}
                    width={300}
                    height={300}
                  />
                  <div className={styles.nhCol2Inner2InnerContent}>
                    <p style={{ color: "var(--grey)" }}>{bm.date}</p>
                    <h4>{bm.name}</h4>
                    <Link href="/blogs/medical-association">
                      <Button
                        text="Read More"
                        bgColor="var(--secondary)"
                        color="var(--color-black)"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHome;
