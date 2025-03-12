import styles from "./GalleryContent.module.css";

function GalleryContent() {
  return (
    <section className={styles.GalleryContent}>
      <div className="container">
        <div className={styles.GalleryContentRow}>
          <div className={styles.GalleryContentCol}>
            <p>GALLERY</p>
            <h3>
              Lifting Spirits, Serving Hearts<br></br> christ your gallery
            </h3>
          </div>
          <p>
            Each image tells a story of collaboration, care, and positive impact
            — a testament to the strength of our Tamil heritage and medical
            excellence. Take a look and relive the milestones that define
            ATMA&apos;s journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GalleryContent;
