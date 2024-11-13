import Image from "next/image";
import styles from "./AnnualConvention.module.css";
import Link from "next/link";
import Button from "../Button";

const AnnualData = [
  {
    id: 1,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/1.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 2,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/2.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 3,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/3.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 4,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/4.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 5,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/5.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 6,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/6.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 7,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/7.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 8,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/8.png",
    link: "/",
    date: "March 21, 2024",
  },
  {
    id: 9,
    title: "Building Bridges of Faith with Hearts Focus Love.",
    desc: "Proin ultricies turpis nec enim commodo sollicitudin. Nulla id viverra metus, non feugiat est.",
    image: "/annual/9.png",
    link: "/",
    date: "March 21, 2024",
  },
];

function AnnualConvention() {
  return (
    <section className={styles.annualConvention}>
      <div className="container">
        <div className={styles.annualConventionRow}>
          {AnnualData.map((item) => (
            <div className={styles.annualConventionCol} key={item.id}>
              <Image
                className={styles.annualConventionImg}
                src={item.image}
                alt="annual"
                width={300}
                height={300}
              />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
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

export default AnnualConvention;
