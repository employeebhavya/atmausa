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
            Mauris imperdiet velit a semper ultrices. Ut vehicula porttitor
            lectus, eu tincidunt eros tincidunt eget. Vivamus venenatis erat at
            ex accumsan, a feugiat velit sagittis. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GalleryContent;
