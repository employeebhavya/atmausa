import Image from "next/image";
import styles from "./Footer.module.css";
import NewsletterForm from "./NewsletterForm";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow1}>
          <div>
            <h2>Join with us, subscribe our newsletter</h2>
            <p>
              Integer in dolor ut ex fringilla vestibulum. Fusce ut congue
              augue.
            </p>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
        <hr className={styles.footerHr} />
        <div className={styles.footerRow2}>
          <div className={styles.footerRow2Col1}>
            <Image
              className={styles.footerLogo}
              src="/logos/logo.png"
              alt="Logo"
              width={300}
              height={100}
            />
            <p>
              Nunc ullamcorper vulputate viverra. Sed feugiat tortor ut
              efficitur interdum. Maecenas id libero viverra mauris fringilla
              semper.
            </p>
            <div className={styles.socialIcons}>
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
          <div className={styles.footerRow2Col1}>
            <h3>Pages</h3>
            <div className={styles.footerLinks}>
              <Link href="/about-us">About Us</Link>
              <Link href="/atma-chapters">Our Pastors</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>
          <div className={styles.footerRow2Col1}>
            <h3>Services</h3>
            <div className={styles.footerLinks}>
              <Link href="/charitable-activities">Charitable Activities</Link>
              <Link href="/annual-convention">Annual Convention</Link>
            </div>
          </div>
          <div className={styles.footerRow2Col1}>
            <h3>Directions</h3>
            <div className={styles.footerLinks}>
              <Link href="#">
                1401 US-18, Hot Springs, SD 57747, United States
              </Link>
              <Link href="#">
                303 S Hewitt St, Los Angeles, CA 90013, United States
              </Link>
            </div>
          </div>
          <div className={styles.footerRow2Col1}>
            <h3>Contacts</h3>
            <div className={styles.footerLinks}>
              <Link href="#">
                +1 213-545-4695<br></br>
                usachurch@example.com
              </Link>
              <Link href="#">
                +1 605-745-4411<br></br>
                loschurch@example.com
              </Link>
            </div>
          </div>
        </div>
        <hr className={styles.footerHr} />
        <div className={styles.footerRow3}>
          <p>© 2025 AtmaUSA. Website by: Tectra Technologies.</p>
          <div className={styles.footerCopyRight}>
            <Image
              src="/footer/footer-payments.png"
              alt="Logo"
              width={328}
              height={21}
            />
            <Link className={styles.vLine} href="#">
              Terms & Conditions
            </Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
