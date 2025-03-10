import Image from "next/image";
import styles from "./BlogInnerPage.module.css";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import SidebarBlog from "./SidebarBlog";

function BlogInnerPage() {
  return (
    <section className={styles.BlogInnerPage}>
      <div className="container">
        <div className={styles.BlogInnerPageRow}>
          <div className={styles.BlogInnerPageCol}>
            <Image
              className={styles.BlogInnerPageImg}
              src="/gallery/21.jpg"
              alt="Blog"
              width={300}
              height={300}
            />
            <div className={styles.BlogInnerAuthor}>
              <p className={styles.flexCol}>
                <FaUserAlt color="var(--primary)" /> <span>ATMA USA</span>
              </p>
              <p className={styles.flexCol}>
                <MdOutlineDateRange color="var(--primary)" />
                <span>05, Dec 2023</span>
              </p>
            </div>
            <h3>What is a Medical Association ? How it works</h3>
            <p className={styles.quote}>
              <sup>
                <RiDoubleQuotesL size={20} />
              </sup>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Tincidunt habitant
                egestas erat lectus congue nisl dapibus nostra bibendum. In est
                in vitae dictumst varius lorem congue rutrum eget primis augue.
                At orci cubilia duis orci consequat libero malesuada mi.
              </span>
              <sub style={{ display: "flex", alignItems: "flex-end" }}>
                <RiDoubleQuotesR size={20} />
              </sub>
            </p>
            <h3>How To Learn</h3>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id
              imperdiet et, porttitor at sem. Pellentesque in ipsum id orci
              porta dapibus.
            </p>
            <div className={styles.imageColumn}>
              <div>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
                <p className={styles.flexCol}>
                  <FaCheckCircle />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>
              </div>
              <Image
                className={styles.BlogInnerPageImg}
                src="/gallery/18.jpg"
                alt="Blog"
                width={300}
                height={300}
              />
            </div>
            <p>
              Nostra dapibus varius et semper semper rutrum ad risus felis eros.
              Cursus libero viverra tempus netus diam vestibulum lorem tincidunt
              congue porta. Non ligula egestas commodo massa. Lorem non sit
              vivamus convallis elit mollis. Viverra sodales feugiat natoque sem
              morbi hac nunc ultricies nibh netus facilisis blandit. Felis purus
              et iaculis.
            </p>
          </div>
          <div className={styles.BlogInnerPageCol2}>
            <SidebarBlog />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogInnerPage;
