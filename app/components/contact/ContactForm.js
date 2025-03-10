import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.title}>Contact Form</h2>
      <p className={styles.description}>
        Duis Aute Irure Dolor In Reprehenderit In Voluptate Eu Fugiat Nulla
        Pariatur.
      </p>

      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className={styles.textarea} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
