import Image from "next/image";
import styles from "./BlogMain.module.css";
import Link from "next/link";
import Button from "../Button";

const BlogData = [
  {
    id: 1,
    image: "/blog/1.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 2,
    image: "/blog/2.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 3,
    image: "/blog/3.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 4,
    image: "/blog/4.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 5,
    image: "/blog/5.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 6,
    image: "/blog/6.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 7,
    image: "/blog/7.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 8,
    image: "/blog/8.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 9,
    image: "/blog/9.png",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
];

function BlogMain() {
  return (
    <section className={styles.BlogMain}>
      <div className="container">
        <div className={styles.BlogMainRow}>
          {BlogData.map((item) => (
            <div className={styles.BlogMainCol} key={item.id}>
              <Image
                className={styles.BlogMainImg}
                src={item.image}
                alt="Blog"
                width={300}
                height={300}
              />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link href={item.link}>
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                />
              </Link>
              <p className={styles.date}>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogMain;
