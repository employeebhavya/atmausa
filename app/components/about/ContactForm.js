import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h3>Contact Us</h3>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input
          type="text"
          placeholder="Phone Number"
          className={styles.input}
        />
        <input type="date" placeholder="Enter Date" className={styles.input} />
        <textarea placeholder="Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
