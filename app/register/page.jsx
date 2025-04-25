"use client";
import { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Link from "next/link";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    gender: "",
    mobilePhone: "",
    officePhone: "",
    email: "",
    dateOfBirth: "",
    gradYear: "",
    residencyInstitution: "",
    fellowshipInstitution: "",
    primarySpeciality: "",
    trainingLevel: "",
    isYoungPhysicianUnder40: false,
    anticipatedCompletion: "",
    completionSpeciality: "",
    membershipType: "",
    agreeTerms: false,
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const router = useRouter();

  // Validate form whenever formData changes
  useEffect(() => {
    const isValid =
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zip &&
      formData.gender &&
      formData.mobilePhone &&
      formData.email &&
      formData.dateOfBirth &&
      formData.gradYear &&
      formData.primarySpeciality &&
      formData.trainingLevel &&
      formData.membershipType &&
      formData.agreeTerms &&
      // Conditional fields
      (formData.trainingLevel !== "Young Physician" ||
        formData.isYoungPhysicianUnder40 !== undefined) &&
      (formData.trainingLevel !== "Medical Student" ||
        formData.anticipatedCompletion) &&
      ((formData.trainingLevel !== "Resident" &&
        formData.trainingLevel !== "Fellow") ||
        (formData.anticipatedCompletion && formData.completionSpeciality));

    setFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getMembershipAmount = () => {
    switch (formData.membershipType) {
      case "lifetime":
        return "150.00";
      case "medicalStudent":
        return "75.00";
      case "alliedHealth":
        return "100.00";
      default:
        return "150.00";
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: getMembershipAmount(),
            currency_code: "USD",
            breakdown: {
              item_total: {
                value: getMembershipAmount(),
                currency_code: "USD",
              },
            },
          },
          items: [
            {
              name: `AATMA ${formData.membershipType} Membership`,
              unit_amount: {
                value: getMembershipAmount(),
                currency_code: "USD",
              },
              quantity: "1",
              category: "DIGITAL_GOODS",
            },
          ],
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      const password = Math.random().toString(36).slice(-8);

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: password,
          membershipType: formData.membershipType,
        }),
      });

      await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          password: password,
        }),
      });

      setPaymentSuccess(true);
      setTimeout(() => router.push("/login"), 3000);
    } catch (error) {
      console.error("Payment processing failed:", error);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-md min-h-screen mx-auto mt-10 p-6 bg-green-50 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-4">
          Thank you for registering with AATMA. Your account details have been
          sent to your email.
        </p>
        <p className="text-gray-600">Redirecting to login page...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-gray-200 rounded-lg shadow-md">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            American Tamil Medical Association
          </h2>
          <p className="text-gray-600">Membership Registration Form</p>
        </div>
        <div>
          <Link href="/login">
            <Button
              text="Login"
              bgColor="var(--primary)"
              color="var(--color-white)"
              hoverBgColor="var(--secondary)"
              hoverTextColor="var(--color-black)"
            />
          </Link>
        </div>
      </div>

      <form className="space-y-6">
        {/* Personal Information Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address*
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City*
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                State*
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip Code*
              </label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender*
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Phone*
              </label>
              <input
                type="tel"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Office Phone
              </label>
              <input
                type="tel"
                name="officePhone"
                value={formData.officePhone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email (Unique)*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
          </div>
        </div>

        {/* Education & Training Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Education & Training
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Medical School Graduation Year*
              </label>
              <input
                type="number"
                name="gradYear"
                value={formData.gradYear}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Primary Speciality*
              </label>
              <input
                type="text"
                name="primarySpeciality"
                value={formData.primarySpeciality}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residency Institution
            </label>
            <input
              type="text"
              name="residencyInstitution"
              value={formData.residencyInstitution}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fellowship Institution
            </label>
            <input
              type="text"
              name="fellowshipInstitution"
              value={formData.fellowshipInstitution}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>
        </div>

        {/* Training Level Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Training Level
          </h2>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select your current status*
            </label>

            <div className="flex flex-wrap gap-4">
              {[
                "Attending",
                "Young Physician",
                "Fellow",
                "Resident",
                "Medical Student",
              ].map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="trainingLevel"
                    id={`trainingLevel-${level}`}
                    value={level}
                    checked={formData.trainingLevel === level}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <label
                    htmlFor={`trainingLevel-${level}`}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {formData.trainingLevel === "Young Physician" && (
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="isYoungPhysicianUnder40"
                id="isYoungPhysicianUnder40"
                checked={formData.isYoungPhysicianUnder40}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="isYoungPhysicianUnder40"
                className="ml-2 block text-sm text-gray-700"
              >
                Check if you are under 40 years old
              </label>
            </div>
          )}

          {(formData.trainingLevel === "Medical Student" ||
            formData.trainingLevel === "Resident" ||
            formData.trainingLevel === "Fellow") && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Anticipated Year of Completion*
                </label>
                <input
                  type="number"
                  name="anticipatedCompletion"
                  value={formData.anticipatedCompletion}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  required
                />
              </div>

              {(formData.trainingLevel === "Resident" ||
                formData.trainingLevel === "Fellow") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Speciality*
                  </label>
                  <input
                    type="text"
                    name="completionSpeciality"
                    value={formData.completionSpeciality}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    required
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Membership Categories Section */}
        <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Membership Categories
          </h2>

          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="radio"
                name="membershipType"
                id="membership-lifetime"
                value="lifetime"
                checked={formData.membershipType === "lifetime"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label
                htmlFor="membership-lifetime"
                className="ml-2 block text-sm text-gray-700"
              >
                Lifetime Membership ($150)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="membershipType"
                id="membership-medicalStudent"
                value="medicalStudent"
                checked={formData.membershipType === "medicalStudent"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="membership-medicalStudent"
                className="ml-2 block text-sm text-gray-700"
              >
                Medical Student ($75)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="membershipType"
                id="membership-alliedHealth"
                value="alliedHealth"
                checked={formData.membershipType === "alliedHealth"}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="membership-alliedHealth"
                className="ml-2 block text-sm text-gray-700"
              >
                Allied Health Science ($100)
              </label>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
            </div>
            <label
              htmlFor="agreeTerms"
              className="ml-3 block text-sm text-gray-700"
            >
              The information provided in this application is true and correct.
              I understand that the AATMA (American Tamil Medical Association)
              Membership Committee will review my information. If found not
              eligible for AATMA membership, I acknowledge that the fees paid
              are non-refundable. As a member of AATMA, I will abide by the
              AATMA Bylaws and Its Articles of Incorporation.
            </label>
          </div>
        </div>

        {/* Payment Section */}
        {formData.membershipType && formData.agreeTerms && formValid && (
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Payment
            </h2>
            <p className="text-lg font-medium mb-4">
              Membership Fee: ${getMembershipAmount()}
            </p>

            <div className="max-w-md mx-auto">
              <PayPalScriptProvider
                options={{
                  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                  currency: "USD",
                  intent: "capture",
                  components: "buttons,marks,funding-eligibility",
                  "enable-funding": "paylater,venmo,card",
                  "data-sdk-integration-source": "integrationbuilder_sc",
                }}
              >
                <PayPalButtons
                  fundingSource={undefined} // Let PayPal decide
                  style={{
                    layout: "vertical",
                    color: "gold",
                    shape: "rect",
                    label: "paypal",
                    height: 48,
                  }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={(err) => {
                    console.error("PayPal error:", err);
                  }}
                  disabled={!formValid}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
