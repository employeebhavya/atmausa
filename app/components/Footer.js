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
            <h3>Join with us, subscribe our newsletter</h3>
            <p className="mt-2">
              Stay connected with ATMA! Subscribe to our newsletter for the
              latest updates on medical initiatives, community outreach, and
              professional opportunities.
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
              The American Tamil Medical Association (ATMA) is a nonprofit
              organization founded to unite Tamil healthcare professionals
              across the United States.
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
                  alt="Youtube"
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
                American Tamil Medical Association ATMA 207 Benedict Rd, Staten
                Island, NY 10304, USA
              </Link>
            </div>
          </div>
          <div className={styles.footerRow2Col1}>
            <h3>Contacts</h3>
            <div className={styles.footerLinks}>
              <Link href="#">+1 213-545-4695</Link>
              <Link href="#">info@atmausa.com</Link>
            </div>
          </div>
        </div>
        <hr className={styles.footerHr} />
        <div className={styles.footerRow3}>
          <p>© 2025 AtmaUSA. Website by: Tectra Technologies.</p>
          <div className={styles.footerCopyRight}>
            {/* <Image
              src="/footer/footer-payments.png"
              alt="Logo"
              width={328}
              height={21}
            /> */}
            <Link className={styles.vLine} href="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
