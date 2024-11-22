"use client";

import { useState, useEffect } from "react";
import styles from "./DonationForm.module.css";
import PayPalButton from "./PayPalButton";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    donationAmount: "",
    frequency: "one-time",
    paymentMethod: "paypal",
    customAmount: "",
  });

  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isPayPalReady, setIsPayPalReady] = useState(false);
  const [loadingPayPal, setLoadingPayPal] = useState(true);
  const [paypalLoadError, setPaypalLoadError] = useState(false);

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

  const handleDonateNow = () => {
    if (loadingPayPal || paypalLoadError) {
      alert("PayPal is not ready. Please wait for the PayPal button to load.");
      return;
    }

    const paypalButton = document.querySelector(
      "#paypal-button-container button"
    );
    if (paypalButton) {
      paypalButton.click();
    }
  };

  useEffect(() => {
    const clientId =
      process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb-dummy1234567890";

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;

    script.onload = () => {
      console.log("PayPal SDK loaded successfully.");
      setIsPayPalReady(true);
      setLoadingPayPal(false);
    };

    script.onerror = (error) => {
      console.error("Failed to load PayPal SDK:", error);
      setPaypalLoadError(true);
      setLoadingPayPal(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.donationForm}>
      <div className="container">
        <form className={styles.form}>
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
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
              />
              PayPal
            </label>
          </div>

          {formData.paymentMethod === "paypal" && (
            <div>
              {loadingPayPal ? (
                <p>Loading PayPal button...</p>
              ) : paypalLoadError ? (
                <p>Error loading PayPal. Please try again later.</p>
              ) : (
                <PayPalButton
                  amount={formData.donationAmount || formData.customAmount}
                  onSuccess={() => {
                    console.log("Payment Successful!");
                    window.location.href = "/members";
                  }}
                  onError={() => {
                    console.error("Payment failed!");
                    setPaymentStatus("Payment failed, try again later");
                  }}
                />
              )}
            </div>
          )}

          {paymentStatus && (
            <p className={styles.paymentStatus}>{paymentStatus}</p>
          )}

          <button
            type="button"
            onClick={handleDonateNow}
            className={styles.submitButton}
            disabled={loadingPayPal || paypalLoadError}
          >
            DONATE NOW
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
