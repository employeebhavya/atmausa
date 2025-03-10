import Image from "next/image";
import styles from "./SidebarBlog.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Link from "next/link";

function SidebarBlog() {
  return (
    <section className={styles.SidebarBlog}>
      <div className={styles.sidebarMainRow}>
        <h3>Latest Blogs</h3>
        <div className={styles.sidebarRow}>
          <div className={styles.sidebarCol}>
            <Image src="/gallery/19.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>05, Dec 2023</span>
                </p>
              </div>
              <Link href="/">
                <h4>Radiating Fait Overfloiing Love Rooted in Grace</h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/20.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>05, Dec 2023</span>
                </p>
              </div>
              <Link href="/">
                <h4>Strengthened Faith, Anchored Love Sharing Blessings</h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/21.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>05, Dec 2023</span>
                </p>
              </div>
              <Link href="/">
                <h4>Embracing Faith&#39;s Promise, Sharing Love&#39;s Light</h4>
              </Link>
            </div>
          </div>
          <hr className={styles.sidebarHR} />
          <div className={styles.sidebarCol}>
            <Image src="/gallery/22.jpg" alt="blog" width={153} height={161} />
            <div className={styles.sideContent}>
              <div className={styles.author}>
                <p className={styles.flexCol}>
                  <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
                </p>
                <p className={styles.flexCol}>
                  <MdOutlineDateRange color="var(--primary)" />
                  <span>05, Dec 2023</span>
                </p>
              </div>
              <Link href="/">
                <h4>Where Love Inspires, Faith Ignites Belonging</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarBlog;
