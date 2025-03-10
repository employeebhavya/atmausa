import Image from "next/image";
import styles from "./CharitableContent.module.css";
import Button from "../Button";
import Link from "next/link";

const CharitableData = [
  {
    id: 1,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/1.png",
    link: "/",
  },
  {
    id: 2,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/2.png",
    link: "/",
  },
  {
    id: 3,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/3.png",
    link: "/",
  },
  {
    id: 4,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/4.png",
    link: "/",
  },
  {
    id: 5,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/5.png",
    link: "/",
  },
  {
    id: 6,
    title: "Your Generous Donation Helps us get !",
    desc: "Mauris risus justo, tempus non ante non, tempus sodales tellus. Vivamus sed tincidunt augue, id laoreet tellus. Pellentesque nibh neque, pharetra at dictum id, rhoncus in dui. ",
    image: "/charitable/6.png",
    link: "/",
  },
];

function CharitableContent() {
  return (
    <section className={styles.CharitableContent}>
      <div className="container">
        <div className={styles.CharitableContentRow}>
          {CharitableData.map((item) => (
            <div className={styles.CharitableContentCol} key={item.id}>
              <Image
                className={styles.CharitableContentImg}
                src={item.image}
                alt="Charitable"
                width={300}
                height={300}
              />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={item.link}>
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CharitableContent;
