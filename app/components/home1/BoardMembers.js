import Image from "next/image";
import styles from "./BoardMembers.module.css";
import Link from "next/link";

const BoardMemebrs = [
  {
    name: "Dr Parithivel",
    designation: "Governor - Michigan chapter ATMA",
    image: "/home/bm/image.png",
  },
  {
    name: "Dr Parithivel",
    designation: "Board member ATMA",
    image: "/home/bm/image-1.png",
  },
  {
    name: "Michelle Parker",
    designation: "Board Member",
    image: "/home/bm/image-2.png",
  },
  {
    name: "Toby Young",
    designation: "Board Member",
    image: "/home/bm/image-2.png",
  },
];

function BoardMembers() {
  return (
    <section className={styles.BoardMembers}>
      <div className="container">
        <div className={styles.bmRow}>
          <div className={styles.bmCol1}>
            <div className={styles.bmCol1Inner}>
              <p>BOARD MEMBERS</p>
              <h3>Our Board Members</h3>
              <p>
                Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
                lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat
                at ex accumsan, a feugiat velit sagittis. Class aptent taciti.
              </p>
            </div>
          </div>
          <div className={styles.bmCol2}>
            {BoardMemebrs.map((bm, index) => (
              <div key={index} className={styles.bmCol2Inner}>
                <Image
                  className={styles.bmImg}
                  src={bm.image}
                  alt={bm.name}
                  width={300}
                  height={300}
                  style={{ marginBottom: "15px" }}
                />
                <h4>{bm.name}</h4>
                <p>{bm.designation}</p>
                <div className={styles.bmsocial}>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/topbar/fb.svg"
                      alt="Facebook"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/topbar/insta.svg"
                      alt="Facebook"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/topbar/twitter.svg"
                      alt="Facebook"
                      width={25}
                      height={25}
                    />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/topbar/yt.svg"
                      alt="Facebook"
                      width={25}
                      height={25}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardMembers;
