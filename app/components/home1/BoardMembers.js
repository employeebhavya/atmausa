import Image from "next/image";
import styles from "./BoardMembers.module.css";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-3.jpg",
  },
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-4.jpg",
  },
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-5.jpg",
  },
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-6.jpg",
  },
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-7.jpg",
  },
  {
    name: "john Doe",
    designation: "Board Member",
    image: "/home/bm/image-8.jpg",
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
            <Carousel>
              <CarouselContent className="-ml-4">
                {BoardMemebrs.map((bm, index) => (
                  <CarouselItem
                    key={index}
                    className={`${styles.bmCol2Inner} pl-4 md:basis-1/3`}
                  >
                    <Image
                      className={styles.bmImg}
                      src={bm.image}
                      alt={bm.name}
                      width={262}
                      height={285}
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary !text-white hover:bg-secondary hover:!text-black" />
              <CarouselNext className="bg-primary !text-white hover:bg-secondary hover:!text-black" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardMembers;
