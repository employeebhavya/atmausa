"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setMessage("All fields are required.");
      setStatus("error");
      return;
    }
    setTimeout(() => {
      setMessage("Message sent successfully!");
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      });
    }, 1000);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.title}>Contact Form</h2>
      <p className={styles.description}>
        Duis Aute Irure Dolor In Reprehenderit In Voluptate Eu Fugiat Nulla
        Pariatur.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
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
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              value={formData.lastName}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className={styles.input}
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm text-start ${
            status === "error" ? "text-red-500" : "!text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
