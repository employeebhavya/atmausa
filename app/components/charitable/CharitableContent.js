import Image from "next/image";
import styles from "./CharitableContent.module.css";
import Button from "../Button";
import Link from "next/link";

const CharitableData = [
  {
    id: 1,
    title: "Free Medical Camps for the Needy",
    desc: "ATMA organizes free medical camps to provide essential healthcare services, including consultations, screenings, and medicines for underserved communities.",
    image: "/charitable/1.png",
    link: "/",
  },
  {
    id: 2,
    title: "Community Health Awareness Programs",
    desc: "Our health awareness campaigns educate communities on preventive care, hygiene, and lifestyle diseases to promote long-term wellness and well-being.",
    image: "/charitable/2.png",
    link: "/",
  },
  {
    id: 3,
    title: "Supporting Healthcare Professionals",
    desc: "ATMA supports frontline healthcare workers by providing training, essential medical supplies, and financial aid to hospitals and clinics in Tamil Nadu.",
    image: "/charitable/3.png",
    link: "/",
  },
  {
    id: 4,
    title: "Rapid Disaster Relief Assistance",
    desc: "In times of crisis, ATMA provides urgent relief by distributing food, medical aid, and rehabilitation support to affected communities for swift recovery.",
    image: "/charitable/4.png",
    link: "/",
  },
  {
    id: 5,
    title: "Scholarships for Future Medical Leaders",
    desc: "ATMA empowers aspiring medical professionals by offering scholarships, ensuring talented students can pursue a career in healthcare without financial burden.",
    image: "/charitable/5.png",
    link: "/",
  },
  {
    id: 6,
    title: "Donating Critical Medical Supplies",
    desc: "ATMA donates essential medical equipment and supplies to hospitals and clinics, ensuring quality healthcare remains accessible to all, especially in rural areas.",
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
              {/* <Link href={item.link}>
                <Button
                  text="Read More"
                  bgColor="var(--secondary)"
                  color="var(--color-black)"
                />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CharitableContent;
