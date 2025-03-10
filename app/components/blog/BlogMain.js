import Image from "next/image";
import styles from "./BlogMain.module.css";
import Link from "next/link";
import Button from "../Button";

const BlogData = [
  {
    id: 1,
    image: "/gallery/18.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 2,
    image: "/gallery/19.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 3,
    image: "/gallery/20.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 4,
    image: "/gallery/21.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 5,
    image: "/gallery/22.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 6,
    image: "/gallery/23.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 7,
    image: "/gallery/24.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 8,
    image: "/gallery/25.jpg",
    title: "Building Bridges of Faith with Hearts Focus Love.",
    description:
      "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    link: "/blogs/medical-association",
    date: "March 21, 2024",
  },
  {
    id: 9,
    image: "/gallery/26.jpg",
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
