import React from "react";
import styles from "./NewsletterForm.module.css";

const NewsletterForm = () => {
  return (
    <form className={styles.NewsletterForm}>
      <input
        type="email"
        placeholder="Email Address"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Subscribe Now
      </button>
    </form>
  );
};

export default NewsletterForm;
