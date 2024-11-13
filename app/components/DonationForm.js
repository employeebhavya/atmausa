"use client";

import { useState, useEffect } from "react";
import styles from "./DonationForm.module.css";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    donationAmount: "",
    frequency: "one-time",
    paymentMethod: "creditCard",
    customAmount: "",
  });

  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [countdown, setCountdown] = useState(30); // Countdown set to 30 seconds
  const [upiSelected, setUpiSelected] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    if (upiSelected && countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (upiSelected && countdown === 0) {
      setPaymentStatus("Payment failed, try another payment method");
      setUpiSelected(false); // Stop showing UPI section
    }
  }, [countdown, upiSelected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAmountClick = (amount) => {
    setFormData({ ...formData, donationAmount: amount });
    setShowCustomAmount(false);
  };

  const handleCustomAmount = () => {
    setFormData({ ...formData, donationAmount: formData.customAmount });
    setShowCustomAmount(true);
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({ ...formData, paymentMethod: method });
    if (method === "upi") {
      setUpiSelected(true);
      setCountdown(30); // Reset countdown to 30 seconds
      setPaymentStatus("");
    } else {
      setUpiSelected(false);
      setPaymentStatus("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className={styles.donationForm}>
      <div className="container">
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>How Much Would You Like To Donate?</h2>

          <div className={styles.amountOptions}>
            {[50, 100, 200, 300, 400].map((amount) => (
              <button
                type="button"
                key={amount}
                className={`${styles.amountButton} ${
                  formData.donationAmount === amount ? styles.active : ""
                }`}
                onClick={() => handleAmountClick(amount)}
              >
                ${amount}
              </button>
            ))}
            <button
              type="button"
              className={`${styles.amountButton} ${
                showCustomAmount ? styles.active : ""
              }`}
              onClick={() => setShowCustomAmount(true)}
            >
              Other amount
            </button>
            {showCustomAmount && (
              <input
                type="number"
                name="customAmount"
                placeholder="Enter amount"
                value={formData.customAmount}
                onChange={handleChange}
                onBlur={handleCustomAmount}
                className={styles.customInput}
              />
            )}
          </div>

          <div className={styles.frequency}>
            <label>
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={formData.frequency === "one-time"}
                onChange={handleChange}
              />
              One Time
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={formData.frequency === "monthly"}
                onChange={handleChange}
              />
              Monthly
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="yearly"
                checked={formData.frequency === "yearly"}
                onChange={handleChange}
              />
              Yearly
            </label>
          </div>

          <div className={styles.personalInfo}>
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <h3 className={styles.subheading}>Select Payment Method</h3>
          <div className={styles.paymentMethod}>
            {["creditCard", "debitCard", "upi"].map((method) => (
              <label key={method}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={(e) => handlePaymentMethodChange(e.target.value)}
                />
                {method === "creditCard"
                  ? "Credit Card"
                  : method === "debitCard"
                  ? "Debit Card"
                  : "UPI"}
              </label>
            ))}
          </div>

          {upiSelected ? (
            <div className={styles.upiSection}>
              <p className={styles.upiCode}>UPI Code: 1234 5678 9101</p>
              <p className={styles.countdown}>Time left: {countdown} seconds</p>
              {paymentStatus && (
                <p className={styles.paymentStatus}>{paymentStatus}</p>
              )}
            </div>
          ) : (
            <div className={styles.cardInfo}>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                className={styles.input}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                className={styles.input}
              />
              <input
                type="text"
                name="cardholderName"
                placeholder="Cardholder Name"
                className={styles.input}
              />
              <input
                type="text"
                name="expiration"
                placeholder="Expiration (MM / YYYY)"
                className={styles.input}
              />
            </div>
          )}

          <button type="submit" className={styles.submitButton}>
            DONATION NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
