"use client";

import React, { useState, useEffect } from "react";
import styles from "./NewsletterForm.module.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" or "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required.");
      setStatus("error");
      return;
    }
    // Simulate API request
    setTimeout(() => {
      setMessage("Subscribed successfully!");
      setStatus("success");
      setEmail("");
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
    <div>
      <form onSubmit={handleSubmit} className={styles.NewsletterForm}>
        <input
          type="email"
          placeholder="Email Address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Subscribe Now
        </button>
      </form>
      {message && (
        <p
          className={`mt-2 text-sm text-center ${
            status === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
