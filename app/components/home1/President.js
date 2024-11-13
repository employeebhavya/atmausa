import Image from "next/image";
import styles from "./President.module.css";

function President() {
  return (
    <section className={styles.President}>
      <div className="container">
        <div className={styles.presidentRow}>
          <div className={styles.presidentCol1}>
            <Image
              src="/home/president.png"
              alt="President"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.presidentCol2}>
            <p>OUR MESSAGE</p>
            <h3>President’s Message</h3>
            <p>
              I thank everyone for giving me an opportunity to serve as the
              President of ATMA- American Tamil Medical Association. I am very
              honored and privileged to serve in this role. As I take this great
              responsibility during the ongoing pandemic, I wish to work with
              everyone as a team to enhance the role of ATMA in providing
              medical needs to our community in Tamil Nadu as well as locally.
            </p>
            <p>
              In the last 15 years ATMA has been involved in many projects that
              have benefitted several thousands, including multiple projects
              during the COVID pandemic. We will continue to do so as needed.
            </p>
            <div>
              <h4>Ashok Kumar</h4>
              <p>President</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default President;
